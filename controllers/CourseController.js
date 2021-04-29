const upload = require("../multer/storage.js");
const Course = require('../models/Course');
const VideoTutorial = require('../models/VideoTutorial');
const DocumentTutorial = require('../models/DocumentTutorial');
const AssignmentTutorial = require('../models/Assignment')

const mongoose = require('mongoose');

const CreateCourse = async (req, res, next) => {
    try {
        upload(req, res, async (err) => {
            if (req.file == null || req.file == undefined || req.file == "") {
                res.json({
                    status: false,
                    message: "No image set"
                });
            } else {
                if (err) {
                    res.json({
                        status: false,
                        message: err.message
                    });
                } else {
                    let payload = new Course({
                        image: req.file.filename,
                        name: req.body.name,
                        description: req.body.desc,
                        availability: req.body.availability,
                        certificate: req.body.certificate,
                        registration: req.body.registration,
                        rating: 0
                    });
                    await payload.save().then(n => {
                        res.json({
                            status: true,
                            message: "Course Created",
                            course_id: n.id
                        });
                    })
                }
            }
        })
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        });
    }   
}

const updateCourseSubModuleName = async (req, res) => {
    try {
        let subModule = {
            name: req.body.name
        }
        var id = mongoose.Types.ObjectId((req.query.course_id));
        await Course.findByIdAndUpdate({ _id: id }, { $push: { subModule: subModule } },{
            new: true,
            runValidators: true,
        }).then(response => {
            res.json({
                status: true,
                message: "Course Updated",
                course: response
            })
        })
    }catch (err) {
        res.json({
            status: false,
            message: err.message
        });
    }   
}

const updateWithVideoTutorial = async (req, res) => {
    try {
        var id = mongoose.Types.ObjectId((req.query.module_id));
        let VideoTutorialPayload = new VideoTutorial({
            name: req.body.name,
            description: req.body.desc,
            link: req.body.link
        });
        const a = await VideoTutorialPayload.save();
        const b = await Course.findOneAndUpdate(
            {  _id: req.query.course_id },
            {
                $push: {
                    "subModule.$[outer].content": {
                        contentId: a._id,
                        contentName: a.name,
                        reference: 'Video'
            }} },
        { "arrayFilters": [{ "outer._id": id }] }
        )
        res.json({
            status: true,
            message: "Course Updated",
            course: await Course.findOne({  _id: req.query.course_id })
        })
    }catch (err) {
        res.json({
            status: false,
            message: err.message
        });
    }  
}

const updateWithDocumentTutorial = async (req, res) => {
    try {
        console.log(req.body);

        upload(req, res, async (err) => {
            if (req.file == null || req.file == undefined || req.file == "") {
                res.json({
                    status: false,
                    message: "No image set"
                });
            } else {
                if (err) {
                    res.json({
                        status: false,
                        message: err.message
                    });
                } else {
                    var id = mongoose.Types.ObjectId((req.query.module_id));
        let DocsTutorialPayload = new DocumentTutorial({
            name: req.body.name,
            file: req.file.filename
        });
        const a = await DocsTutorialPayload.save();
        const b = await Course.findOneAndUpdate(
            {  _id: req.query.course_id },
            {
                $push: {
                    "subModule.$[outer].content": {
                        contentId: a._id,
                        contentName: a.name,
                        reference: 'Document'
            }} },
        { "arrayFilters": [{ "outer._id": id }] }
        )
        res.json({
            status: true,
            message: "Course Updated",
            course: await Course.findOne({  _id: req.query.course_id })
        })
                }
            }
        }
        )

    }catch (err) {
        res.json({
            status: false,
            message: err.message
        });
    }  
}

const updateWithAssignment = async (req, res) => {
    try {
        var id = mongoose.Types.ObjectId((req.query.module_id));
        let AssignmentPayload = new AssignmentTutorial({
            name: req.body.name,
            description: req.body.desc,
            type: req.body.type
        });
        const a = await AssignmentPayload.save();
        const b = await Course.findOneAndUpdate(
            {  _id: req.query.course_id },
            {
                $push: {
                    "subModule.$[outer].content": {
                        contentId: a._id,
                        contentName: a.name,
                        reference: 'Assignment'
            }} },
        { "arrayFilters": [{ "outer._id": id }] }
        )
        res.json({
            status: true,
            message: "Course Updated",
            course: await Course.findOne({  _id: req.query.course_id })
        })
    }catch (err) {
        res.json({
            status: false,
            message: err.message
        });
    }
}

const getCourseWithId = async(req, res) => {
    try {
        console.log(req.query.id);
        let course = await Course.findOne({ _id: req.query.id });
        if (course) {
            res.json({
                status: true,
                course: course
            });
        } else {
            res.status(404).json({
                status: false,
                message: "No Course Found"
            });
        }
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        });
    }  
}

module.exports = {CreateCourse,getCourseWithId,updateCourseSubModuleName, updateWithAssignment, updateWithDocumentTutorial, updateWithVideoTutorial}