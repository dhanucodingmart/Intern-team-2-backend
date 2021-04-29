const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const DocumentTutorialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model('DocumentTutorial', DocumentTutorialSchema)