const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const connectDB = require('./config/db');
// const errorHandling = require('./middleware/errorHandling'); // Uncomment when ready to use

// Routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

// Set up CORS to accept requests from a specific origin and with credentials
app.use(cors({ 
    credentials: true,
    origin: 'http://localhost:3000'
}));

// Database Connection
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes Middleware
app.use('/', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// Error Handling Middleware

// app.use(errorHandling); // Uncomment when you have implemented errorHandling middleware

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
