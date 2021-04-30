const express = require('express')
const router = express.Router()
const CourseController = require('../controllers/CourseController')
const passport = require('passport')
require('../config/passport')(passport);


// @desc    Create Course
// @route   GET /course/createcourse
router.post('/createcourse', passport.authenticate('jwt', { session: false }), CourseController.CreateCourse);

// @desc    Get Course with id
// @route   GET /course/getcoursewithid
router.get('/getcoursebyid', passport.authenticate('jwt', { session: false }), CourseController.getCourseWithId);

// @desc    Get Course with user id
// @route   GET /course/getcoursewithuserid
router.get('/getcoursebyuserid', passport.authenticate('jwt', { session: false }), CourseController.getCourseWithUserId);

// @desc    update course Sub module name
// @route   POST /course/getcoursewithid
router.post('/updatecoursesubmodulename', passport.authenticate('jwt', { session: false }), CourseController.updateCourseSubModuleName);

// @desc    update video tutorial to course Sub module
// @route   POST /course/uploadvideotutorial
router.post('/uploadvideotutorial', passport.authenticate('jwt', { session: false }), CourseController.updateWithVideoTutorial);


// @desc    update document tutorial to course Sub module
// @route   POST /course/uploaddocumenttutorial
router.post('/uploaddocumenttutorial', passport.authenticate('jwt', { session: false }), CourseController.updateWithDocumentTutorial);

// @desc    assign assignment to course Sub module
// @route   POST /course/uploadassignmnet
router.post('/uploadassignmnet', passport.authenticate('jwt', { session: false }), CourseController.updateWithAssignment);


module.exports = router;