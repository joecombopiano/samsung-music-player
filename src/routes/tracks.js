const express = require('express');
const router = express.Router();
const tracks = require('../data/tracks.json');

router.get('/', (req, res) => {
  res.json(tracks);
});

router.get('/:id', (req, res) => {
  const track = tracks.find(t => t.id === req.params.id);
  if (!track) return res.status(404).json({ error: 'Track not found' });
  res.json(track);
});

module.exports = router;
