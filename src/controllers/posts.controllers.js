// src/controllers/posts.controller.js

const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Handling GET request for all posts",
  });
};

const getPostById = async (req, res) => {
  try {
    const { postId } = req.params;

    res.status(200).json({
      success: true,
      message: `Fetching data for post with ID: ${postId}`,
      data: {
        id: postId,
        title: "Example Post Title",
        content: "This is where the post body would go."
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching the post."
    });
  }
};

// Exporting the functions so the router can see them
module.exports = {
  getAllPosts,
  getPostById
};