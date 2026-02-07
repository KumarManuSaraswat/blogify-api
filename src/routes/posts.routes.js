// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();

// Import the controller
const postController = require('../controllers/posts.controllers');

// Route for getting all posts: GET /api/v1/posts/
router.get('/', postController.getAllPosts);

// NEW: Route for getting a single post: GET /api/v1/posts/:postId
// The ':postId' creates a variable we can access in the controller via req.params
router.get('/:postId', postController.getPostById);

module.exports = router;