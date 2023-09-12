const express = require('express');
const router = express.Router();
const ensureAuthenticated  = require('../middleware/auth');
const Comment = require('../models/commentModel');

// List all comments for a post
router.get('/posts/:postId/comments', async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Add a comment to a post
router.post('/posts/:postId/comments', ensureAuthenticated, async (req, res) => {
    try {
        const newComment = new Comment({
            postId: req.params.postId,
            userId: req.user.id,
            text: req.body.text,
        });

        const comment = await newComment.save();
        res.json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update a comment
router.put('/comments/:commentId', ensureAuthenticated, async (req, res) => {
    try {
        let comment = await Comment.findById(req.params.commentId);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        // Ensure the user is the owner of the comment
        if (comment.userId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        comment = await Comment.findByIdAndUpdate(req.params.commentId, req.body, { new: true });
        res.json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Delete a comment
router.delete('/comments/:commentId', ensureAuthenticated, async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        // Ensure the user is the owner of the comment
        if (comment.userId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        await comment.remove();
        res.json({ message: 'Comment removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Like a comment
router.post('/comments/:commentId/like', ensureAuthenticated, async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        // Check if the user has already liked the comment
        if (comment.likes.includes(req.user.id)) {
            return res.status(400).json({ message: 'You already liked this comment' });
        }

        comment.likes.push(req.user.id);
        await comment.save();
        res.json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Unlike a comment
router.post('/comments/:commentId/unlike', ensureAuthenticated, async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        const index = comment.likes.indexOf(req.user.id);
        if (index === -1) {
            return res.status(400).json({ message: 'You have not liked this comment yet' });
        }

        comment.likes.splice(index, 1);
        await comment.save();
        res.json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
