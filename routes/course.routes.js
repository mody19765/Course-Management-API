const express = require('express');
const router = express.Router();
const controller = require('../controllers/courseController.js');

router.get('/api/courses', controller.fetchAllCourses);
router.get('/api/courses/:id', controller.fetchCourseById);
router.post('/api/courses', controller.addNewCourse);
router.delete('/api/courses/:id', controller.removeCourse);
router.put('/api/courses/:id', controller.modifyCourse);



module.exports = router;
