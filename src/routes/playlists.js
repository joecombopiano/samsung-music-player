const express = require('express');
const router = express.Router();
const users = require('../data/users.json');

router.get('/:userId', (req, res) => {
  const user = users.find(u => u.id === req.params.userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user.playlists);
});

module.exports = router;
