const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const CourseRegSchema = new mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    registration: {
        type: Boolean,
        required: true
    },
    certificate: {
        type: Boolean,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    rating: {
        type: Number
    },
    subModule: [{
        name: String,
        content: [{
            contentId: String,
            contentName: String,
            reference: String
        }]
    }],
},{timestamps: true})

module.exports = mongoose.model('Course', CourseRegSchema)