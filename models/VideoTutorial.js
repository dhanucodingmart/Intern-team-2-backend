const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const VideoTutorialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model('VideoTutorial', VideoTutorialSchema)