const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const filesRouter = require('./files.router');
const app = express();
app.use(cors({
    origin: ['http://localhost:5173', 'https://orbital-eye.vercel.app']
}));
app.use(morgan('combined'));
app.use(express.json());

app.use('/', (req, res) => {
    res.send({message: "Welcome!"})
})
app.use('/files', filesRouter);
module.exports = app;