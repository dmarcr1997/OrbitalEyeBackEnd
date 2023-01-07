const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { httpGetAllFiles, httpSaveFile } = require('./files.controller');

const app = express();
app.use(cors({
    origin: ['http://localhost:5173', 'https://orbital-eye.vercel.app']
}));
app.use(morgan('combined'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({message: "Welcome!"})
})
app.get('/files', httpGetAllFiles);
app.post('/files', httpSaveFile);

module.exports = app;