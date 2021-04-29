const express = require('express')
const router = express.Router()
const CourseController = require('../controllers/CourseController')

// @desc    Create Course
// @route   GET /course/createcourse
router.post('/createcourse', CourseController.CreateCourse);

// @desc    Get Course with id
// @route   GET /course/getcoursewithid
router.get('/getcoursebyid', CourseController.getCourseWithId);

// @desc    update course Sub module name
// @route   POST /course/getcoursewithid
router.post('/updatecoursesubmodulename', CourseController.updateCourseSubModuleName);

// @desc    update video tutorial to course Sub module
// @route   POST /course/uploadvideotutorial
router.post('/uploadvideotutorial', CourseController.updateWithVideoTutorial);


// @desc    update document tutorial to course Sub module
// @route   POST /course/uploaddocumenttutorial
router.post('/uploaddocumenttutorial', CourseController.updateWithDocumentTutorial);

// @desc    assign assignment to course Sub module
// @route   POST /course/uploadassignmnet
router.post('/uploadassignmnet', CourseController.updateWithAssignment);


module.exports = router;