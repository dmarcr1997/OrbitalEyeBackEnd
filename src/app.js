const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const filesRouter = require('./routes/files/files.router');
const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(morgan('combined'));
app.use(express.json());

app.use('/files', filesRouter);
module.exports = app;