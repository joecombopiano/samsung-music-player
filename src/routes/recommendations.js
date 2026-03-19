const express = require('express');
const router = express.Router();
const { getRecommendationsForUser } = require('../services/recommendation');

router.get('/:userId', (req, res) => {
  getRecommendationsForUser(req.params.userId, (err, recs) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch recommendations' });
    res.json(recs);
  });
});

module.exports = router;
