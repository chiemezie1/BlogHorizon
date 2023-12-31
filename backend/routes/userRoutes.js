const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');
const ensureAuthenticated  = require('../middleware/AuthMiddleware');


// Public routes

// User Registration
router.post('/register', UserController.register);

// User Login
router.post('/login', UserController.login);


// Private routes

// Fetch Profile of Authenticated User
router.get('/profile', ensureAuthenticated, UserController.getProfile);

// // Update Profile of Authenticated User
// router.put('/profile', ensureAuthenticated, UserController.updateProfile);

// // Optional: Delete the authenticated user's profile (consider carefully if you want this)
// router.delete('/profile', ensureAuthenticated, UserController.deleteProfile);

module.exports = router;
