const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Assuming Sequelize is used for User model

const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const saltRounds = 10;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Store user details in the database
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        // Send the created user back (excluding sensitive info like password)
        res.status(201).json({
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the provided password with the stored hashed password
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT (Replace 'your_jwt_secret' with a secret key from your environment variable)
        const token = jwt.sign(
            { id: user.id, email: user.email, username: user.username },
            process.env.JWT_SECRET || 'your_jwt_secret',
            { expiresIn: '1h' } // Token will expire in 1 hour
        );

        // Send the token and user data (excluding the password) in response
        res.json({
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
            },
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Failed to log in' });
    }
});

module.exports = router;
