require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI);

// Portfolio Schema
const portfolioSchema = new mongoose.Schema({
  section: String,
  content: mongoose.Schema.Types.Mixed,
  updatedAt: { type: Date, default: Date.now }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// Authentication middleware
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

// Login route
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Get all portfolio data
app.get('/api/portfolio', async (req, res) => {
  try {
    const data = await Portfolio.find();
    const portfolio = data.reduce((acc, item) => {
      acc[item.section] = item.content;
      return acc;
    }, {});
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update portfolio section
app.put('/api/portfolio/:section', auth, async (req, res) => {
  try {
    const { section } = req.params;
    const { content } = req.body;
    
    await Portfolio.findOneAndUpdate(
      { section },
      { section, content },
      { upsert: true, new: true }
    );
    
    res.json({ message: 'Updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
