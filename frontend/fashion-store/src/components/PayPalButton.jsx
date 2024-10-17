import React, { useEffect } from 'react';

const PayPalButton = () => {
    useEffect(() => {
        console.log('PayPalButton component mounted');
        if (window.paypal) {
            console.log('PayPal SDK found, initializing buttons...');
            window.paypal.Buttons({
                createOrder: async (data, actions) => {
                    try {
                        console.log('Creating PayPal order...');
                        const response = await fetch('/create-paypal-order', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        });
                        const orderData = await response.json();
                        console.log('Order created successfully', orderData);
                        return orderData.id; // Return the order ID
                    } catch (error) {
                        console.error('Error creating order:', error);
                    }
                },
                onApprove: async (data, actions) => {
                    try {
                        console.log('Payment approved, capturing...');
                        const response = await actions.order.capture();
                        console.log('Payment successful!', response);
                    } catch (error) {
                        console.error('Error capturing payment:', error);
                    }
                },
                onError: (err) => {
                    console.error('Payment error:', err);
                },
            }).render('#paypal-button-container');
        } else {
            console.error('PayPal SDK not loaded!');
        }
    }, []);

    return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
