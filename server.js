const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test if env is loaded correctly
console.log("MongoDB URI:", process.env.MONGO_URI);

// routes
const snippetRoutes = require('./routes/snippets');
app.use('/snippets', snippetRoutes);

// API routes
app.get('/api/routes', (req, res) => {
    res.json({
      routes: [
        { method: 'GET', path: '/api/snippets' },
        { method: 'GET', path: '/api/snippets/:id' },
        { method: 'POST', path: '/api/snippets' },
        { method: 'PUT', path: '/api/snippets/:id' },
        { method: 'DELETE', path: '/api/snippets/:id' }
      ]
    });
  });


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const PORT = process.env.PORT || 3000; // Use environment port or default to 3000
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("MongoDB connection error:", err.message);
    });