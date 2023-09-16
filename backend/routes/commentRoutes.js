const express = require('express');
const CommentController = require('../controllers/commentController');
const ensureAuthenticated = require('../middleware/AuthMiddleware');

const router = express.Router();

// Route to create a new comment for a post
router.post('/', ensureAuthenticated, CommentController.createComment);

// Route to get all comments for a specific post
router.get('/post/:postId', CommentController.getCommentsByPost);


// Private routes

// Route to update a comment
router.put('/:commentId', ensureAuthenticated, CommentController.updateComment);

// Route to delete a comment
router.delete('/:commentId', ensureAuthenticated, CommentController.deleteComment);

// Route to like a comment
router.post('/:commentId/like', ensureAuthenticated, CommentController.likeComment);

// Route to unlike a comment
router.post('/:commentId/unlike', ensureAuthenticated, CommentController.unlikeComment);

module.exports = router;
