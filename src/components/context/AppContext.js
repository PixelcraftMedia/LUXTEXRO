import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext([null, () => {}]);

export const AppProvider = (props) => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const cartData = localStorage.getItem('woo-next-cart');
        if (cartData) {
            setCart(JSON.parse(cartData));
        }
    }, []);

    return (
        <AppContext.Provider value={[cart, setCart]}>
            {props.children}
        </AppContext.Provider>
    );
};
