const User = require('../models/userModel');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/profile-images/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)) // append the original file extension
    }
});

const upload = multer({ storage: storage });

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

exports.updateProfileImage = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const oldImagePath = path.join(__dirname, '../uploads/profile-images', user.profileImage);
        if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath); // remove old image
        }

        user.profileImage = req.file.filename; // update with new image filename
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

        const imagePath = path.join(__dirname, '../uploads/profile-images', user.profileImage);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath); // remove image
        }

        user.profileImage = null; // clear image filename from user's document
        await user.save();

        res.status(200).json({ message: 'Profile image deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting profile image', error: error.message });
    }
};

exports.serveImage = async (req, res) => {
    try {
        const filename = req.params.filename;
        const filepath = path.join(__dirname, '../uploads/profile-images', filename);

        if (!fs.existsSync(filepath)) {
            return res.status(404).json({ message: 'Image not found' });
        }

        res.sendFile(filepath);
    } catch (error) {
        res.status(500).json({ message: 'Error serving image', error: error.message });
    }
};
