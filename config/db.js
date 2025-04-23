const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongoURI = process.env.MONGO_URI ;

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;