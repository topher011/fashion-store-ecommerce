const { Sequelize } = require('sequelize');
const dbConfig = require('./db.config');  // Adjust path to db.config.js

// Initialize Sequelize with config values
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,  // Ensure this is a valid dialect (e.g., mysql, postgres)
    }
);

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully.');
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

module.exports = sequelize;  // Export the sequelize instance for use in models and server.js
