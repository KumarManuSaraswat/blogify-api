// src/controllers/posts.controller.js

/**
 * @desc    Get all posts
 * @route   GET /api/v1/posts
 * @access  Public
 */
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Handling GET request for all posts",
  });
};

module.exports = {
  getAllPosts,
};