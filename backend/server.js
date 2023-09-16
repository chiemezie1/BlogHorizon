const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require("cors");
const connectDB = require('./config/db');
// const errorHandling = require('./middleware/errorHandling'); // Uncomment when ready to use

// Routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const imageRoutes = require('./routes/imageRoutes');

// Middleware
const app = express();
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up CORS to accept requests from a specific origin and with credentials
app.use(cors({ 
    credentials: true,
    origin: 'http://localhost:3000'
}));

// Database Connection
connectDB();


// Routes Middleware
app.use('/', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/image', imageRoutes);

// Error Handling Middleware

// app.use(errorHandling); // Uncomment when you have implemented errorHandling middleware

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
