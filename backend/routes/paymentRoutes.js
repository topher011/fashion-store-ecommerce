// backend/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const PayPal = require('paypal-rest-sdk');

// Configure PayPal
PayPal.configure({
    mode: 'sandbox', // Use 'live' for production
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

// Define the createOrder function
const createOrder = (req, res) => {
    const createPaymentJson = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: '10.00' // Example amount
            }
        }]
    };

    PayPal.payment.create(createPaymentJson, (error, payment) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json({ id: payment.id });
        }
    });
};

// Add the route
router.post('/create-paypal-order', createOrder);

module.exports = router;
