const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const courseRoutes = require('./routes/course.routes.js');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/', courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
