const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Database connection error:', err));

// 1. Import the router (You named it 'postRouter' here)
const postRouter = require('./routes/posts.routes');

app.use(express.json());

// 2. Mount the router
// FIX: Changed 'postRoutes' to 'postRouter' to match the variable above!
app.use('/api/v1/posts', postRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});