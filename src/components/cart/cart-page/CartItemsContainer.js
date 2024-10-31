import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from "../../context/AppContext";
import { getFormattedCart, getUpdatedItems } from '../../../functions';
import CartItem from "./CartItem";
import CartItemMobil from "./CartItemMobil";
import { v4 as uuidv4 } from 'uuid';
import { useMutation, useQuery } from '@apollo/client';
import UPDATE_CART from "../../../mutations/update-cart";
import GET_CART from "../../../queries/get-cart";
import CLEAR_CART_MUTATION from "../../../mutations/clear-cart";
import { isEmpty } from 'lodash';
import { useAuth } from '../../login-function/hooks';

const CartItemsContainer = () => {
    const { isLoggedIn } = useAuth();
    const [cart, setCart] = useContext(AppContext);
    const [requestError, setRequestError] = useState(null);

    // Get Cart Data
    const { loading, error, data, refetch } = useQuery(GET_CART, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {
            const updatedCart = getFormattedCart(data);
            localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
            setCart(updatedCart);
        }
    });

    // Update Cart Mutation
    const [updateCart, { loading: updateCartProcessing }] = useMutation(UPDATE_CART, {
        onCompleted: () => refetch(),
        onError: (error) => {
            const errorMessage = error?.graphQLErrors?.[0]?.message || '';
            setRequestError(errorMessage);
        }
    });

    // Clear Cart Mutation
    const [clearCart, { loading: clearCartProcessing }] = useMutation(CLEAR_CART_MUTATION, {
        onCompleted: () => {
            setCart(null);
            localStorage.removeItem('woo-next-cart');
            refetch();
        },
        onError: (error) => {
            const errorMessage = !isEmpty(error?.graphQLErrors?.[0]) ? error.graphQLErrors[0]?.message : '';
            setRequestError(errorMessage);
        }
    });

    // Handle removing a product from the cart
	const handleRemoveProductClick = (event, cartKey, products) => {
        event.stopPropagation();
        const updatedItems = getUpdatedItems(products, 0, cartKey);
    
        updateCart({
            variables: {
                input: {
                    clientMutationId: uuidv4(), // Changed here
                    items: updatedItems,
                },
            },
        }).then(response => {
            console.log("Product removed:", response);
            refetch().then((res) => {
                const updatedCart = getFormattedCart(res.data);
                setCart(updatedCart);
                localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
            });
        }).catch(error => {
            console.error("Error during update:", error);
        });
    };
	

    // Handle clearing the entire cart
    const handleClearCart = (event) => {
        event.stopPropagation();

        if (clearCartProcessing) {
            return;
        }

        clearCart({
            variables: {
                input: {
                    clientMutationId: uuidv4(),
                    all: true
                }
            },
        }).catch((error) => {
            console.error("Error clearing cart:", error);
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
                                {cart && cart.products.length > 0 && cart.products.map(item => (
    <CartItem  key={item.productId}
    item={item}
    updateCartProcessing={updateCartProcessing}
    products={cart.products}
    handleRemoveProductClick={handleRemoveProductClick}
    updateCart={updateCart} />
))}
                                       
                                </tbody>
                            </table>
                            <div className="border p-5 bg-gray-200">
                                <div className="w-full">
                                    <table className="table table-hover mb-5">
                                        <tbody>
                                            <tr className="table-light flex flex-col">
                                                <td className="woo-next-cart-element-total text-2xl font-normal">Проміжний підсумок</td>
                                                <td className="woo-next-cart-element-amt text-2xl font-bold">
                                                    {typeof cart.totalProductsPrice !== 'string' ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice}
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
                        {requestError && <div className="row woo-next-cart-total-container mt-5">{requestError}</div>}
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
                            {cart.products.length > 0 && cart.products.map(item => (
                                <CartItemMobil
                                    key={item.productId}
                                    item={item}
                                    updateCartProcessing={updateCartProcessing}
                                    products={cart.products}
                                    handleRemoveProductClick={handleRemoveProductClick}
                                    updateCart={updateCart}
                                />
                            ))}
                        </div>
                        <div className="mt-8 border p-5 bg-gray-200">
                            <div className="w-full">
                                <table className="table table-hover mb-5">
                                    <tbody>
                                        <tr className="table-light flex flex-col">
                                            <td className="woo-next-cart-element-total text-2xl font-normal">Проміжний підсумок</td>
                                            <td className="woo-next-cart-element-amt text-2xl font-bold">
                                                {typeof cart.totalProductsPrice !== 'string' ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice}
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
                        {requestError && <div className="row woo-next-cart-total-container mt-5">{requestError}</div>}
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
