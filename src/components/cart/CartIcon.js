import { useContext, useEffect } from 'react';
import { AppContext } from "../context/AppContext";
import Link from 'next/link';

const CartIcon = () => {
    const [cart] = useContext(AppContext);

    useEffect(() => {
        console.log('Cart updated:', cart);
    }, [cart]); // Этот хук будет срабатывать при каждом изменении состояния `cart`.

    const productsCount = cart ? cart.totalProductsCount : '';

    return (
        <Link href="/cart">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                {productsCount ? <span className="flex justify-center items-center ml-1 bg-red-400 w-5 h-5 rounded-full absolute top-0 right-0">{productsCount}</span> : ''}
            </div>
        </Link>
    );
};

export default CartIcon;













