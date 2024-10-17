const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register User
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if all fields are provided
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({ username, email, password: hashedPassword });

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with the user and token
    res.status(201).json({ user, token });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({  error: "Error registering user", details: err.message });
  }
};

// Login User
// Login User
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log('Login request body:', req.body); // Log the request body
  
      // Check if all fields are provided
      if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Find user by email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        console.log('User not found:', email); // Log if user is not found
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Validate password
      const isValidPassword = await bcrypt.compare(password, user.password);
      console.log('Password comparison:', {
        enteredPassword: password,
        storedPassword: user.password,
        isValidPassword
      }); // Log the password comparison
  
      if (!isValidPassword) {
        console.log('Password is invalid'); // Log if password doesn't match
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log('Generated token:', token); // Log the generated token
  
      res.json({ token });
    } catch (error) {
      console.error('Error in login:', error); // Debugging log
      res.status(500).json({ message: error.message });
    }
  };
  