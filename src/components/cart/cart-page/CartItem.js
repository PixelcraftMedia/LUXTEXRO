import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getUpdatedItems } from "../../../functions";
import { Cross } from "../../icons";

const CartItem = ({ item, products, updateCartProcessing, handleRemoveProductClick, updateCart }) => {
    const [productCount, setProductCount] = useState(item.qty);

    useEffect(() => {
        // Пересчитываем товары и обновляем их в localStorage
        const updatedProducts = products.map(product => {
            if (product.cartKey === item.cartKey) {
                return {
                    ...product,
                    qty: productCount,
                    totalPrice: product.price * productCount,
                };
            }
            return product;
        });

        // Пересчитываем общую сумму всех товаров
        const totalProductsPrice = updatedProducts.reduce((sum, product) => {
            return sum + (product.totalPrice || 0);
        }, 0);

        // Обновляем корзину в localStorage
        const currentCart = JSON.parse(localStorage.getItem('woo-next-cart')) || {};
        const updatedCart = {
            ...currentCart,
            products: updatedProducts,
            totalProductsCount: updatedProducts.reduce((count, product) => count + product.qty, 0),
            totalProductsPrice: totalProductsPrice, // Храним сумму как число
        };
        localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
    }, [productCount, item.cartKey, products]);

    const handleQtyChange = async (event, cartKey) => {
        event.stopPropagation();

        if (updateCartProcessing) return;

        const newQty = event.target.value ? parseInt(event.target.value, 10) : 1;
        setProductCount(newQty);

        if (products.length) {
            const updatedItems = getUpdatedItems(products, newQty, cartKey);

            try {
                await updateCart({
                    variables: {
                        input: {
                            clientMutationId: uuidv4(),
                            items: updatedItems,
                        },
                    },
                });
            } catch (error) {
                console.error('Error updating cart:', error);
            }
        }
    };

    return (
        <tr className="woo-next-cart-item" key={item.productId}>
            <th className="woo-next-cart-element woo-next-cart-el-close">
                <span
                    className="woo-next-cart-close-icon cursor-pointer"
                    onClick={(event) => handleRemoveProductClick(event, item.cartKey, products)}
                >
                    <Cross />
                </span>
            </th>
            <td className="woo-next-cart-element">
                <img
                    width="64"
                    src={item.image.sourceUrl}
                    srcSet={item.image.srcSet}
                    alt={item.image.title}
                />
            </td>
            <td className="woo-next-cart-element">{item.name}</td>
            <td className="woo-next-cart-element woo-next-cart-qty">
                <input
                    type="number"
                    min="1"
                    data-cart-key={item.cartKey}
                    className={`woo-next-cart-qty-input form-control ${updateCartProcessing ? 'opacity-25 cursor-not-allowed' : ''}`}
                    value={productCount}
                    onChange={(event) => handleQtyChange(event, item.cartKey)}
                />
            </td>
            <td className="woo-next-cart-element">
                {typeof item.totalPrice === 'number' 
                    ? (item.totalPrice / 100).toLocaleString('uk-UA', {
                        style: 'currency',
                        currency: 'UAH',
                    })
                    : '0 грн'}
            </td>
        </tr>
    );
};

export default CartItem;
