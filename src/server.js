const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');
require('dotenv').config(); 
const PORT = process.env.PORT || 4000;

const server = http.createServer(app);
const username = process.env.MONGOUSERNAME;
const password = process.env.MONGOPASS;
console.log(username + ' ' + password)
const MONGO_URL = `mongodb+srv://${username}:${password}@cluster0.qimmqsp.mongodb.net/?retryWrites=true&w=majority`

mongoose.connection.once('open', () => {
    console.log('MongoDB connection established...');
});

mongoose.connection.on('error', (err) => {
    console.error(err)
});

async function startServer() {
    await mongoose.connect(MONGO_URL);
    server.listen(PORT, () => {
        console.log('Listening on Port: ' + PORT);
    });
}

startServer();
