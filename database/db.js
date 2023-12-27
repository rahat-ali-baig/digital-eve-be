const mongoose = require('mongoose');
require('dotenv').config();

const user = process.env.DB_USER
const userpass = process.env.DB_PASS 
const dbname = process.env.DB_NAME 

const uri= `mongodb+srv://${user}:${userpass}@digital-eve.6ta7jrf.mongodb.net/${dbname}`
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
