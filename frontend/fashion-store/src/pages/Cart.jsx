// src/pages/Cart.jsx
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from '../components/PayPalButton';

const Cart = ({ cart, setCart }) => {
    const handleRemoveFromCart = (indexToRemove) => {
        setCart(prevCart => prevCart.filter((item, index) => index !== indexToRemove));
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.price} - Size: {item.size} - Qty: {item.quantity}
                                <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <Link to="/checkout">Proceed to Checkout</Link>

                </div>
            )}
            <PayPalButton />
            
        </div>
        
    );
};

export default Cart;
