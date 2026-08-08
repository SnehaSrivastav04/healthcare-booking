const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.log('Connection failed:', err));

app.get('/', (req, res) => {
  res.send('Hello, Healthcare Booking!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});