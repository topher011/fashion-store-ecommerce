require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/paymentRoutes');
const sequelize = require('./config/sequelize');
const User = require('./models/user');



sequelize.sync({ force: false }) // force: true drops the tables on every sync
    .then(() => {
        console.log('Database & tables synced!');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });


 app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
