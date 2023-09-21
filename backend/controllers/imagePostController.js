const Post = require('../models/postModel');
const fs = require('fs'); 
const path = require('path');

exports.uploadPostImage = async (req, res) => {
    try {
        // Create a new post (or find an existing one)
        const post = new Post({
            image: req.file.filename, // Assuming image is a field in the Post model to save the image filename
            // Other fields related to the post can be set here
        });

        await post.save();

        res.status(200).json({ message: 'Post image uploaded successfully', filename: req.file.filename });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading post image', error: error.message });
    }
};

exports.updatePostImage = async (req, res) => {
    try {
        const postId = req.params.id; // Assuming the post ID is sent as a URL parameter
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Optional: Delete the old image from the server
        const oldImagePath = path.join(__dirname, '../uploads', post.image);
        if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
        }

        // Update with the new filename
        post.image = req.file.filename;
        await post.save();

        res.status(200).json({ message: 'Post image updated successfully', filename: req.file.filename });
    } catch (error) {
        res.status(500).json({ message: 'Error updating post image', error: error.message });
    }
};

exports.deletePostImage = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Delete the image from the server
        const imagePath = path.join(__dirname, '../uploads', post.image);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        // Remove the post from the database (or just clear the image field if you don't want to delete the post)
        await post.remove();

        res.status(200).json({ message: 'Post image deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post image', error: error.message });
    }
};

exports.servePostImage = async (req, res) => {
    try {
        const filename = req.params.filename;
        const filepath = path.join(__dirname, '../images/post/', filename);

        if (!fs.existsSync(filepath)) {
            return res.status(404).json({ message: 'Image not found' });
        }

        res.sendFile(filepath);
    } catch (error) {
        res.status(500).json({ message: 'Error serving post image', error: error.message });
    }
};

