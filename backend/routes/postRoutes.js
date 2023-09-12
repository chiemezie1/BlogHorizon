const express = require('express');
const router = express.Router();
const Post = require('../models/postModel');

// CREATE a new post
router.post('/', async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

// GET a single post by ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).send();
        }
        res.status(200).send(post);
    } catch (error) {
        res.status(500).send(error);
    }
});

// UPDATE a post by ID
router.patch('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!post) {
            return res.status(404).send();
        }
        res.status(200).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE a post by ID
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).send();
        }
        res.status(200).send(post);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
