import Link from 'next/link';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from "../../context/AppContext";
import { getFormattedCart, getUpdatedItems } from '../../../functions';
import CartItem from "./CartItem";
import CartItemMobil from "./CartItemMobil";
import { v4 as uuidv4 } from 'uuid';
import { useMutation, useQuery } from '@apollo/client';
import UPDATE_CART from "../../../mutations/update-cart";
import GET_CART from "../../../queries/get-cart";
import CLEAR_CART_MUTATION from "../../../mutations/clear-cart";
import { useAuth } from '../../login-function/hooks';

const CartItemsContainer = () => {
   
    const [cart, setCart] = useContext(AppContext);
    const [requestError, setRequestError] = useState(null);

    // Загружаем корзину из localStorage при монтировании
    useEffect(() => {
        const localCart = localStorage.getItem('woo-next-cart');
        if (localCart) {
            setCart(JSON.parse(localCart));
        }
    }, [setCart]);

    // Получение данных корзины
    const { loading, error, data, refetch } = useQuery(GET_CART, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {
            const updatedCart = getFormattedCart(data);
            if (updatedCart) {
                localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
                setCart(updatedCart);
            }
        }
    });

    // Мутация для обновления корзины
    const [updateCart, { loading: updateCartProcessing }] = useMutation(UPDATE_CART, {
        onCompleted: refetch,
        onError: (error) => {
            const errorMessage = error?.graphQLErrors?.[0]?.message || 'Error updating cart';
            setRequestError(errorMessage);
        }
    });

    // Мутация для очистки корзины
    const [clearCart, { loading: clearCartProcessing }] = useMutation(CLEAR_CART_MUTATION, {
        onCompleted: () => {
            setCart(null);
            localStorage.removeItem('woo-next-cart');
            refetch();
        },
        onError: (error) => {
            const errorMessage = error?.graphQLErrors?.[0]?.message || 'Error clearing cart';
            setRequestError(errorMessage);
        }
    });

    // Удаление отдельного продукта из корзины
    const handleRemoveProductClick = async (event, cartKey, products) => {
        event.stopPropagation();
    
        // Проверка на наличие необходимых данных
        if (!cartKey || !products || !Array.isArray(products)) {
            console.error("Invalid data provided for removing product.");
            return;
        }
    
        // Обновление элементов корзины с нулевым количеством для удаления продукта
        const updatedItems = getUpdatedItems(products, 0, cartKey);
    
        try {
            // Выполнение мутации для обновления корзины
            await updateCart({
                variables: {
                    input: {
                        clientMutationId: uuidv4(),
                        items: updatedItems,
                    },
                },
            });
    
            // Обновление данных корзины после мутации
            const res = await refetch();
            const updatedCart = getFormattedCart(res.data);
            setCart(updatedCart);
            localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
        } catch (error) {
            // Логирование ошибки и установка сообщения об ошибке
            console.error("Error during update:", error);
            setRequestError('Error updating product in cart');
        }
    };
    

    const handleClearCart = (event) => {
        event.stopPropagation();
        if (clearCartProcessing) return;

        clearCart({
            variables: {
                input: {
                    clientMutationId: uuidv4(),
                    all: true
                }
            },
        }).then(() => {
            localStorage.removeItem('woo-next-cart');
            setCart(null);
            refetch().then((res) => {
                const updatedCart = getFormattedCart(res.data);
                if (!updatedCart || !updatedCart.products.length) {
                    setCart(null);
                    localStorage.removeItem('woo-next-cart');
                } else {
                    setCart(updatedCart);
                    localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
                }
            });
        }).catch((error) => {
            console.error("Error clearing cart:", error);
            setRequestError('Error clearing cart');
        });
    };

    return (
        <>
            {/* Desktop view */}
            <div className="hidden mx-4 md:h-screen md:flex justify-center items-center">
                {cart ? (
                    <div className="woo-next-cart-wrapper container">
                        <div className="cart-header grid grid-cols-2 gap-4">
                            <h1 className="text-2xl mb-5 uppercase">Корзина</h1>
                            <div className="clear-cart text-right">
                                <button
                                    className="px-4 py-1 bg-gray-500 text-white rounded-sm"
                                    onClick={handleClearCart}
                                    disabled={clearCartProcessing}
                                >
                                    Очистити корзину
                                </button>
                                {clearCartProcessing && <p>Clearing...</p>}
                                {updateCartProcessing && <p>Updating...</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-4 gap-0 xl:gap-4 mb-5">
                            <table className="cart-products table-auto col-span-3 mb-5">
                                <thead>
                                    <tr className="woo-next-cart-head-container">
                                        <th scope="col" />
                                        <th scope="col" />
                                        <th scope="col">Продукт</th>
                                        <th scope="col">Кількість</th>
                                        <th scope="col">Всього</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.products.length > 0 ? cart.products.map(item => (
                                       <CartItem
                                       item={item}
                                       products={cart.products}
                                       updateCartProcessing={updateCartProcessing}
                                       handleRemoveProductClick={handleRemoveProductClick}
                                       updateCart={updateCart}
                                       setCart={setCart} // Передаем setCart в компонент
                                       setRequestError={setRequestError}
                                   />
                                    )) : (
                                        <tr>
                                            <td colSpan="5" className="text-center">Корзина пуста</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="border p-5 bg-gray-200">
                                <div className="w-full">
                                    <table className="table table-hover mb-5">
                                        <tbody>
                                            <tr className="table-light flex flex-col">
                                                <td className="woo-next-cart-element-total text-2xl font-normal">Проміжний підсумок</td>
                                                <td className="woo-next-cart-element-amt text-2xl font-bold">
    {cart.totalProductsPrice
}
</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Link href="/checkout">
                                        <button className="bg-blue text-white w-full py-2">
                                            Перейти до оформлення замовлення
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {requestError && <div className="mt-5 text-red-500">{requestError}</div>}
                    </div>
                ) : (
                    <div className="container mx-auto my-32 px-4 xl:px-0">
                        <h2 className="text-2xl mb-5">У кошику немає товарів</h2>
                        <Link href="/">
                            <button className="bg-purple-600 text-white px-5 py-3 rounded-sm">
                                Додати нові продукти
                            </button>
                        </Link>
                    </div>
                )}
            </div>

            {/* Mobile view */}
            <div className="block md:hidden my-32 mx-4">
                {cart ? (
                    <div className="woo-next-cart-wrapper container">
                        <div className="cart-header grid grid-cols-2 gap-4">
                            <h1 className="text-2xl mb-5 uppercase">Корзина</h1>
                            <div className="clear-cart text-right">
                                <button
                                    className="px-4 py-1 bg-gray-500 text-white rounded-sm"
                                    onClick={handleClearCart}
                                    disabled={clearCartProcessing}
                                >
                                    Очистити корзину
                                </button>
                                {clearCartProcessing && <p>Clearing...</p>}
                                {updateCartProcessing && <p>Updating...</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-4 gap-0 xl:gap-4 mb-5">
                            {cart.products.length > 0 ? cart.products.map(item => (
                                <CartItemMobil
                                    key={item.productId}
                                    item={item}
                                    updateCartProcessing={updateCartProcessing}
                                    products={cart.products}
                                    handleRemoveProductClick={handleRemoveProductClick}
                                    updateCart={updateCart}
                                />
                            )) : (
                                <p className="text-center">Корзина пуста</p>
                            )}
                        </div>
                        <div className="mt-8 border p-5 bg-gray-200">
                            <div className="w-full">
                                <table className="table table-hover mb-5">
                                    <tbody>
                                        <tr className="table-light flex flex-col">
                                            <td className="woo-next-cart-element-total text-2xl font-normal">Проміжний підсумок</td>
                                            <td className="woo-next-cart-element-amt text-2xl font-bold">
    {cart.totalProductsPrice && typeof cart.totalProductsPrice === 'number'
        ? cart.totalProductsPrice.toFixed(2)
        : '0.00'}
</td>

                                        </tr>
                                    </tbody>
                                </table>
                                <Link href="/checkout">
                                    <button className="bg-blue text-white w-full py-2">
                                        Перейти до оформлення замовлення
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {requestError && <div className="mt-5 text-red-500">{requestError}</div>}
                    </div>
                ) : (
                    <div className="container mx-auto my-32 px-4 xl:px-0">
                        <h2 className="text-2xl mb-5">No items in the cart</h2>
                        <Link href="/">
                            <button className="bg-purple-600 text-white px-5 py-3 rounded-sm">
                                Add New Products
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartItemsContainer;
