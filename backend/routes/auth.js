// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');

// Register route
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

// routes/auth.js (continue from previous example)
// routes/auth.js (login route)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log('Received email:', email); // Debugging log

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        console.log('User found:', user); // Debugging log

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful', userId: user.id });
    } catch (error) {
        console.error('Error during login:', error); // Log the error for debugging
        res.status(500).json({ error: 'Error logging in' });
    }
});


module.exports = router;
