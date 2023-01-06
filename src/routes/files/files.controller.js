const { getAllFiles, saveFile } = require( '../../models/files.model');

async function httpGetAllFiles(req, res) {
    return res.status(200).json(await getAllFiles());
}

function validFile(file) {
    return file.fileName && file.ipfsHash && file.createdDate && file.creator;
}

async function httpSaveFile(req, res) {
    const file = req.body;
    const valid = validFile(file);
    if(!valid) {
        return res.status(400).json({error: 'Invalid file data', data: {
            fileName: !!file.fileName,
            hash: !!file.ipfsHash,
            date: !!file.createdDate
        }});
    }

    saveFile(file);
    return res.status(200).json(file);
}

module.exports = {
    httpGetAllFiles,
    httpSaveFile
};