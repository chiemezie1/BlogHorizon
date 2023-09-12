const Post = require('../models/Post');

const PostController = {

    // Create a new post
    createPost: async (req, res) => {
        try {
            const { title, content, image } = req.body;

            const newPost = new Post({
                title,
                content,
                image,
                author: req.user.id
            });

            const savedPost = await newPost.save();
            res.status(201).json(savedPost);
        } catch (err) {
            res.status(500).json({ error: 'Error creating post.' });
        }
    },

    // Fetch all posts
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.find().populate('author', 'username');
            res.json(posts);
        } catch (err) {
            res.status(500).json({ error: 'Error fetching posts.' });
        }
    },

    // Fetch a specific post by ID
    getPostById: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id).populate('author', 'username');
            if (!post) return res.status(404).json({ message: 'Post not found.' });
            res.json(post);
        } catch (err) {
            res.status(500).json({ error: 'Error fetching post.' });
        }
    },

    // Update a post
    updatePost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);

            if (!post) return res.status(404).json({ message: 'Post not found.' });

            // Ensure that the authenticated user is the author of the post
            if (post.author.toString() !== req.user.id) {
                return res.status(403).json({ message: 'You are not authorized to update this post.' });
            }

            // Update fields
            post.title = req.body.title || post.title;
            post.content = req.body.content || post.content;
            post.image = req.body.image || post.image;

            await post.save();
            res.json(post);
        } catch (err) {
            res.status(500).json({ error: 'Error updating post.' });
        }
    },

    // Delete a post
    deletePost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);

            if (!post) return res.status(404).json({ message: 'Post not found.' });

            // Ensure that the authenticated user is the author of the post
            if (post.author.toString() !== req.user.id) {
                return res.status(403).json({ message: 'You are not authorized to delete this post.' });
            }

            await post.remove();
            res.json({ message: 'Post deleted successfully.' });
        } catch (err) {
            res.status(500).json({ error: 'Error deleting post.' });
        }
    }
};

module.exports = PostController;
