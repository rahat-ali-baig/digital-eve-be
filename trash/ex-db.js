
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/test?readPreferences=primary&appname=MongoDB%20Compass&ssl=false';
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    // const db = client.db('test');
    // const collection = db.collection('users');

    // const document = { name: 'John Doe', age: 30 };
    // const result = await collection.insertOne(document);
    // console.log(`Inserted ${result.insertedCount} document(s) with ID: ${result.insertedId}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
  }
}


module.exports = {
  connect,
};

// const uri = 'mongodb+srv://root:Rahatali-35@learning.1jqrknb.mongodb.net/';
