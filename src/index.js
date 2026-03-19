require('dotenv').config();
const express = require('express');
const trackRoutes = require('./routes/tracks');
const playlistRoutes = require('./routes/playlists');
const recommendationRoutes = require('./routes/recommendations');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'android-music-player' });
});

app.use('/api/tracks', trackRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api/recommendations', recommendationRoutes);

app.listen(PORT, () => {
  console.log(`Android Music Player running on port ${PORT}`);
});

module.exports = app;
