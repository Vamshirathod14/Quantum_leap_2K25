const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const registrationRoutes = require('./routes/registrationRoutes');

dotenv.config();
const app = express();

// Allow all origins during development
app.use(cors());

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/registrations', registrationRoutes);

module.exports = app;