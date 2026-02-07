// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();

// Import the controller
const postController = require('../controllers/posts.controller');

// Point the route to the controller function
// Notice we don't call it with (), we just reference it!
router.get('/', postController.getAllPosts);

module.exports = router;