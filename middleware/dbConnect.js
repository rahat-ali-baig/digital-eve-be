const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_CONNECTION;

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

module.exports = connectToDatabase;
