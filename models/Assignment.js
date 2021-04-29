const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const AssignmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model('AssignmentTutorial', AssignmentSchema);