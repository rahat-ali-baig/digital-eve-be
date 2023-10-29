const express = require('express');
const app = express();
const db = require('./database/db');
const UsersData = require('./models/Users');

// Middleware
app.use(express.json());

// Connection
db.connect();

// Routes
app.get('/', (req, res) => {
    res.send('Hello World! This is your MERN stack server.');
});

app.get('/signup', async (req, res)=> {
    const users = new UsersData({
        fname: 'Rahat',
        lname:'Ali',
        email: 'rahat@robx.ai',
        password: '123456',
        confirmpassword:'12345',
    });
    await users.save();
    res.send('Data Inserted Successfully!')
});

module.exports = app;