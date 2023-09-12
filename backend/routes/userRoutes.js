const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const User = require('../models/userModel');
const ensureAuthenticated = require('../middleware/auth');


const router = express.Router();

// Register a user
router.post('/register', async (req, res) => {
    const { username, firstname, lastname, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({
            username,
            firstname,
            lastname,
            email,
            password,
        });

        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT, if you're using JWT authentication
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get profile
router.get('/profile', ensureAuthenticated, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); // not sending back the password
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update profile
router.put('/profile', ensureAuthenticated, async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        updates.forEach((update) => user[update] = req.body[update]);

        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete user
router.delete('/profile', ensureAuthenticated, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.id);
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;
