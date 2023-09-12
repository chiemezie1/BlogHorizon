const mongoose = require('mongoose');
require("dotenv").config();

const MONGODB_URI = process.env.MONGO_URI;


// Function to establish a connection to the MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
