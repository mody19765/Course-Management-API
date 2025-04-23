const Course_DB = require('../models/Course.models.js');


exports.fetchAllCourses = async (req, res) => {
    try {
        const allCourses = await Course_DB.find();
        res.json({ success: true, data: allCourses });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message || 'Internal server error' });
    }
};

exports.fetchCourseById = async (req, res) => {
    try {
        const course = await Course_DB.findById(req.params.id);

        if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
        
        res.json({ success: true, data: course });
    
    } catch (err) {
        res.status(500).json({ success: false, message: err.message || 'Internal server error' });
    }
};

exports.addNewCourse = async (req, res) => {
    try {
        const { title, description, image, startDate, endDate, price } = req.body;

        if (!title || title.trim() === '') {
            return res.status(400).json({ success: false, message: 'Title is required and cannot be empty' });
        }

        if (!description || description.trim() === '') {
            return res.status(400).json({ success: false, message: 'Description is required and cannot be empty' });
        }

        const course = await Course_DB.create({ title, description, image, startDate, endDate, price });
        res.status(201).json({ success: true, data: course });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message || 'Internal server error' });
    }
};

exports.modifyCourse = async (req, res) => {
    try {
        const updatedCourse = await Course_DB.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!updatedCourse) return res.status(404).json({ success: false, message: 'Course not found' });
        
        res.json({ success: true, data: updatedCourse });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message || 'Internal server error' });
    }
};

exports.removeCourse = async (req, res) => {
    try {
        const deletedCourse = await Course_DB.findByIdAndDelete(req.params.id);

        if (!deletedCourse) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        res.json({ success: true, message: 'Course deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message || 'Internal server error' });
    }
};
