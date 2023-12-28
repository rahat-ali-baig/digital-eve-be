const express = require('express');
const app = express();
const path = require('path')
const db = require('./database/db');
// const dbConnect = require('./middleware/dbConnect');
const UsersData = require('./models/Users');

// Middleware
app.use(express.json());

// dbConnect();
db.connect();

// Routes
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'template', 'index.html');
    res.sendFile(filePath);
});

app.get('/signup', async (req, res) => {
    try {
        const users = new UsersData({
            fname: 'Rahat',
            lname: 'Ali',
            email: 'rahat@robx.ai',
            password: '123456',
        });
        await users.save();
        res.send('Data Inserted Successfully!');
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await UsersData.find({});
        res.send(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = app;
