const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_CONNECTION 

async function connect() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true });
    console.log('Connected to MongoDB Server');
   
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } 
}


module.exports = {
  connect,
};

// const uri = 'mongodb+srv://root:Rahatali-35@learning.1jqrknb.mongodb.net/';
