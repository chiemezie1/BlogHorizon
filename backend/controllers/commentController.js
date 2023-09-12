const Comment = require('../models/commentModel');

const CommentController = {};

// Create a comment
CommentController.createComment = async (req, res) => {
    try {
        const comment = new Comment({
            content: req.body.content,
            postId: req.body.postId,
            userId: req.user._id,
        });
        
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the comment.' });
    }
};

// Get all comments for a post
CommentController.getCommentsByPost = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch comments.' });
    }
};

// Update a comment
CommentController.updateComment = async (req, res) => {
    try {
        const comment = await Comment.findOne({ _id: req.params.commentId, userId: req.user._id });
        
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found or not authorized.' });
        }

        comment.content = req.body.content || comment.content;
        await comment.save();

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the comment.' });
    }
};

// Delete a comment
CommentController.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findOneAndDelete({ _id: req.params.commentId, userId: req.user._id });

        if (!comment) {
            return res.status(404).json({ error: 'Comment not found or not authorized.' });
        }

        res.status(200).json({ message: 'Comment deleted.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the comment.' });
    }
};

// Like a comment
CommentController.likeComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found.' });
        }

        if (comment.likes.includes(req.user._id)) {
            return res.status(400).json({ error: 'User already liked this comment.' });
        }

        comment.likes.push(req.user._id);
        await comment.save();

        res.status(200).json({ message: 'Comment liked.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to like the comment.' });
    }
};

// Unlike a comment
CommentController.unlikeComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found.' });
        }

        const likeIndex = comment.likes.indexOf(req.user._id);
        if (likeIndex === -1) {
            return res.status(400).json({ error: "User hasn't liked this comment." });
        }

        comment.likes.splice(likeIndex, 1);
        await comment.save();

        res.status(200).json({ message: 'Comment unliked.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to unlike the comment.' });
    }
};

module.exports = CommentController;
