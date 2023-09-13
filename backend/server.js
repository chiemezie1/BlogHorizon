const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const connectDB = require('./config/db');
const errorHandling = require('./middleware/errorHandling');

const app = express();

// Use dotenv to load environment variables
require('dotenv').config();

// Database Connection
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// Error handling
// app.use(errorHandling);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

