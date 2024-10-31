import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { getUpdatedItems } from "../../../functions";
import { Cross, Loading } from "../../icons";

const CartItem = ({
    item,
    products,
    updateCartProcessing,
    handleRemoveProductClick,
    updateCart,
}) => {
    const [productCount, setProductCount] = useState(item.qty);

    /**
     * Handle quantity change and update the cart in local storage and context.
     * @param {Object} event - The event object.
     * @param {string} cartKey - The key of the cart item being updated.
     */
    const handleQtyChange = (event, cartKey) => {
        event.stopPropagation();

        // Prevent updating if a cart mutation is still processing.
        if (updateCartProcessing) {
            return;
        }

        // Get the new quantity or set it to 1 if the input is empty or invalid.
        const newQty = event.target.value ? parseInt(event.target.value) : 1;

        // Update the quantity in the state.
        setProductCount(newQty);

        if (products.length) {
            const updatedItems = getUpdatedItems(products, newQty, cartKey);

            // Execute the mutation to update the cart.
            updateCart({
                variables: {
                    input: {
                        clientMutationId: uuidv4(),
                        items: updatedItems,
                    },
                },
            });
        }
    };

    return (
        <tr className="woo-next-cart-item" key={item.productId}>
            <th className="woo-next-cart-element woo-next-cart-el-close">
                {/* Remove item */}
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

            {/* Quantity input */}
            <td className="woo-next-cart-element woo-next-cart-qty">
                <input
                    type="number"
                    min="1"
                    data-cart-key={item.cartKey}
                    className={`woo-next-cart-qty-input form-control ${
                        updateCartProcessing ? 'opacity-25 cursor-not-allowed' : ''
                    }`}
                    value={productCount}
                    onChange={(event) => handleQtyChange(event, item.cartKey)}
                />
            </td>
            <td className="woo-next-cart-element">
                {typeof item.totalPrice !== 'string'
                    ? item.totalPrice.toFixed(2)
                    : item.totalPrice}
            </td>
        </tr>
    );
};

export default CartItem;
