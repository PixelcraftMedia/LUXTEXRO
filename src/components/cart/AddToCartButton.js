import {useState, useContext} from "react";
import {useQuery, useMutation} from '@apollo/client';
import Link from "next/link";
import {v4} from 'uuid';
import cx from 'classnames';
import { useAuth } from '../login-function/hooks';
import {AppContext} from "../context/AppContext";
import {getFormattedCart,getFormattedCartLog} from "../../functions";
import GET_CART from "../../queries/get-cart";
import ADD_TO_CART from "../../mutations/add-to-cart";

const AddToCart = (props) => {

	const { isLoggedIn } = useAuth();
	

    const {product} = props;

    const productQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
    
        
    };

    const [cart, setCart] = useContext(AppContext);
    const [showViewCart, setShowViewCart] = useState(false);
    const [requestError, setRequestError] = useState(null);

        // Get Cart Data.
    const {data, refetch} = useQuery(GET_CART, {
            notifyOnNetworkStatusChange: true,
            onCompleted: () => {

                // Update cart in the localStorage.
                const updatedCart =  getFormattedCart(data);
                localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

                // Update cart data in React Context.
                setCart(updatedCart);
            }
        });

    // Add to Cart Mutation.
    const [addToCart, {
        data: addToCartRes,
        loading: addToCartLoading,
        error: addToCartError
    }] = useMutation(ADD_TO_CART, {
        variables: {
            input: productQryInput,
        },
        onCompleted: () => {
            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            refetch();

            // 2. Show View Cart Button
            setShowViewCart(true)
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    });

    const handleAddToCartClick = async () => {
        setRequestError(null);
        await addToCart();
    
        // Принудительное обновление состояния корзины.
        refetch().then((res) => {
            const updatedCart = getFormattedCart(res.data);
            setCart(updatedCart);
            localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
        });
    };
    

    return (
    
        
        <div>
                 
            {/*	Check if its an external product then put its external buy link */}
            {"ExternalProduct" === product.__typename ? (
                    <a href={product?.externalUrl ?? '/'} target="_blank"
                       className="px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600">
						Buy now
                    </a>
                ) :
                <button
					disabled={addToCartLoading}
                    onClick={handleAddToCartClick}
                    className={cx(
                        ' py-4 px-2  w-full  text-sm border-solid   mt-3 mb-3 rounded-full',
                        {'hover:bg-bottons_hover bg-bottons hover:transition delay-150 duration-300 ease-in-out ... text-text_grey  ': !addToCartLoading},
                        {'opacity-50 cursor-not-allowed': addToCartLoading}
                    )}
                >
					{ addToCartLoading ? 'se încarcă...' : 'В КОШИК' }
                </button>
                
            }
            {showViewCart ? (
                <Link href="/cart">
                    <button
                        className="px-4 py-4    text-sm border-solid border border-current  bg-bottons inline-block hover:bg-bottons_hover text-text_grey absolute top-5 right-4 duration-700 rounded-full uppercase"> Кошик
                     
                    </button>
                </Link>
            ) : ''}
        </div>
       
    );
};

export default AddToCart;