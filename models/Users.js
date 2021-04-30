const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const UserRegSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    myCreatedCourse: [{
        type: ObjectId,
        ref: "Course"
    }]
},{timestamps: true});

module.exports = mongoose.model('User', UserRegSchema)