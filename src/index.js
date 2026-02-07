const express = require('express');
const app = express();
// 1. Import the router
const postRoutes = require('./src/routes/posts.routes');

app.use(express.json());

// 2. Mount the router
// Every route inside postRoutes will now be prefixed with /api/v1/posts
app.use('/api/v1/posts', postRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});