const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    ipfsHash: {
        type: String,
        required: true,
    },
    fileName: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('File', fileSchema);