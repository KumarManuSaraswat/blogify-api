// src/controllers/posts.controller.js

/**
 * @desc    Get all blog posts
 * @route   GET /api/v1/posts
 * @access  Public
 */
const getAllPosts = (req, res) => {
  // Mock data for now - in a real app, this comes from your database
  const posts = [
    { id: "1", title: "First Post", content: "Standardizing responses!" },
    { id: "2", title: "Second Post", content: "Working with JSON envelopes." }
  ];

  res.status(200).json({
    success: true,
    data: posts // Wrapped in the standard envelope
  });
};

/**
 * @desc    Get a single post by ID
 * @route   GET /api/v1/posts/:postId
 * @access  Public
 */
const getPostById = async (req, res) => {
  try {
    const { postId } = req.params;

    // Mocking a database find
    const post = {
      id: postId,
      title: "Example Post Title",
      content: "This is where the post body would go."
    };

    res.status(200).json({
      success: true,
      data: post // Consistently wrapped in the data key
    });
  } catch (error) {
    // While the mission focuses on success, 
    // keeping a consistent error format is also best practice
    res.status(500).json({
      success: false,
      error: "Server error while fetching the post."
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById
};