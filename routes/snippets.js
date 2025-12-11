const express = require('express');
const router = express.Router();
const Snippet = require('../models/Snippet.js');

// 1️ GET all snippets
router.get('/', async (req, res) => {
  try {
    const snippets = await Snippet.find();
    res.json(snippets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2️ GET one Snippet by ID
router.get('/:id', async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id);
    if (!snippet) return res.status(404).json({ message: 'Snippet not found' });
    res.json(snippet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3️ POST create a new Snippet
router.post('/', async (req, res) => {
  const snippet = new Snippet({
    title: req.body.title,
    language: req.body.language,
    code: req.body.code,
    description: req.body.description,
    tags: req.body.tags
  });

  try {
    const savedSnippet = await snippet.save();
    res.status(201).json(savedSnippet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 4️ PUT update Snippet by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedSnippet = await Snippet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSnippet) return res.status(404).json({ message: 'Snippet not found' });
    res.json(updatedSnippet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 5️ DELETE snippet by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedSnippet = await Snippet.findByIdAndDelete(req.params.id);
    if (!deletedSnippet) return res.status(404).json({ message: 'Snippet not found' });
    res.json({ message: 'Snippet deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
