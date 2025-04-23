const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  image: { type: String },
  startDate: { 
    type: Date,
    validate: {
      validator: function(value) {
        return value >= new Date(); 
      },
      message: 'Start date cannot be in the past'
    }
  },
  endDate: { 
    type: Date,
    validate: {
      validator: function(value) {
        return value >= this.startDate; 
      },
      message: 'End date must be after the start date'
    }
  },
  price: { 
    type: Number, 
    required: true,
    validate: {
      validator: function(value) {
        return value > 0;
      },
      message: 'Price must be greater than 0'
    }
  },
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
