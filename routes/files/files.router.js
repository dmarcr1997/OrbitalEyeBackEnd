const express = require('express');
const { httpGetAllFiles, httpSaveFile } = require('./files.controller');

const filesRouter = express.Router();

filesRouter.get('/', httpGetAllFiles);
filesRouter.post('/', httpSaveFile);

module.exports = filesRouter;