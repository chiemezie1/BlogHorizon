const Post = require('../models/postModel'); 
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/post-images/') // Directory to store post images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)) // Append the original file extension
    }
});

const upload = multer({ storage: storage });

exports.uploadPostImage = async (req, res) => {
    try {
        const postId = req.params.postId; // Assuming you pass the post ID in the request
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.image = req.file.filename;
        await post.save();

        res.status(200).json({ message: 'Post image uploaded successfully', filename: req.file.filename });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading post image', error: error.message });
    }
};

exports.updatePostImage = async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const oldImagePath = path.join(__dirname, '../uploads/post-images', post.image);
        if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath); // remove old image
        }

        post.image = req.file.filename; // update with new image filename
        await post.save();

        res.status(200).json({ message: 'Post image updated successfully', filename: req.file.filename });
    } catch (error) {
        res.status(500).json({ message: 'Error updating post image', error: error.message });
    }
};

exports.deletePostImage = async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const imagePath = path.join(__dirname, '../uploads/post-images', post.image);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath); // remove image
        }

        post.image = null; // clear image filename from post's document
        await post.save();

        res.status(200).json({ message: 'Post image deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post image', error: error.message });
    }
};

exports.servePostImage = async (req, res) => {
    try {
        const filename = req.params.filename;
        const filepath = path.join(__dirname, '../uploads/post-images', filename);

        if (!fs.existsSync(filepath)) {
            return res.status(404).json({ message: 'Image not found' });
        }

        res.sendFile(filepath);
    } catch (error) {
        res.status(500).json({ message: 'Error serving post image', error: error.message });
    }
};
