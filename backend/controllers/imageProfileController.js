const User = require('../models/userModel');
const fs = require('fs'); // To interact with the file system
const path = require('path');

exports.uploadProfileImage = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Save the filename to the user's profileImage field
        user.profileImage = req.file.filename;
        await user.save();

        res.status(200).json({ message: 'Profile image uploaded successfully', filename: req.file.filename });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading profile image', error: error.message });
    }
};

exports.uploadPostImage = async (req, res) => {
    try {
        // Assuming you handle post creation separately, here we just save the image
        const filename = req.file.filename;
        res.status(200).json({ message: 'Post image uploaded successfully', filename });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading post image', error: error.message });
    }
};

exports.updateProfileImage = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Optional: Delete the old image from the server
        const oldImagePath = path.join(__dirname, '../uploads', user.profileImage);
        if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
        }

        // Save the new filename to the user's profileImage field
        user.profileImage = req.file.filename;
        await user.save();

        res.status(200).json({ message: 'Profile image updated successfully', filename: req.file.filename });
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile image', error: error.message });
    }
};

exports.deleteProfileImage = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete the image from the server
        const imagePath = path.join(__dirname, '../uploads', user.profileImage);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        // Remove the filename from the user's profileImage field
        user.profileImage = null;
        await user.save();

        res.status(200).json({ message: 'Profile image deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting profile image', error: error.message });
    }
};

exports.serveImage = async (req, res) => {
    try {
        const filename = req.params.filename;
        const filepath = path.join(__dirname, '../uploads', filename);

        if (!fs.existsSync(filepath)) {
            return res.status(404).json({ message: 'Image not found' });
        }

        res.sendFile(filepath);
    } catch (error) {
        res.status(500).json({ message: 'Error serving image', error: error.message });
    }
};

