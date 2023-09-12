const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');
const ensureAuthenticated = require('../middleware/auth');

// Create a new post
router.post('/create', ensureAuthenticated, PostController.createPost);

// Get all posts
router.get('/', PostController.getAllPosts);

// Get a specific post by ID
router.get('/:postId', PostController.getPostById);

// Update a post by ID
router.put('/:postId', ensureAuthenticated, PostController.updatePost);

// Delete a post by ID
router.delete('/:postId', ensureAuthenticated, PostController.deletePost);

module.exports = router;
