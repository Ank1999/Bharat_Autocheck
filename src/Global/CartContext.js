import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (newItem) => {
        setCartItems((currentItems) => {
            // Check if the item is already in the cart
            const isItemInCart = currentItems.find(item => item.id === newItem.id);

            if (isItemInCart) {
                // If the item is already in the cart, you might want to update the quantity or return the current items unmodified
                return currentItems; // Or update the item as needed
            } else {
                // Add the new item to the cart
                return [...currentItems, newItem];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};