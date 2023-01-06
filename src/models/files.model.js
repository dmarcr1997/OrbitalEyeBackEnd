const files = require('./files.mongoose');

async function getAllFiles() {
    return await files.find({}, {'__v': 0});
}

async function saveFile(data) {
    if(!data.ipfsHash) {
        throw new Error('No hash provided');
    } else if (!data.fileName) {   
        throw new Error('No file name provided');
    } else if (!data.createdDate) {
        throw new Error('No created date provided');
    } else if (!data.creator) {
        throw new Error('No creator provided');
    }

    await files.updateOne({
        ipfsHash: data.ipfsHash
    }, data, { upsert: true });
}

module.exports = {
    getAllFiles,
    saveFile
};