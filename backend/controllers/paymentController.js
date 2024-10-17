// paymentController.js
const paypal = require('@paypal/checkout-server-sdk');
const dotenv = require('dotenv');

dotenv.config();

// Configure PayPal SDK
const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

// Create a payment
const createOrder = async (req, res) => {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: '100.00', // Replace with the actual amount
                breakdown: {
                    item_total: { value: '100.00', currency_code: 'USD' },
                },
            },
        }],
    });

    try {
        const order = await client.execute(request);
        res.json({ id: order.result.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating PayPal order');
    }
};

module.exports = { createOrder };
