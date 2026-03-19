# Android Music Player

The Android Music Player is Spotify's core playback service for Android clients. It handles track playback, playlist management, and personalized recommendations.

## Architecture

The service is a Node.js/Express application that integrates with:

- **Music Catalog API** — track metadata and audio streams
- **User Listen History API** — playback history for recommendation input
- **Legacy Recommendation Engine** — `music-player-recommendation-engine@3.x` for generating track suggestions

## Running Locally

```bash
cp .env.example .env
# Fill in your credentials
npm install
npm run seed
npm start
```

The service starts on port 3000 by default.

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/tracks` | List all tracks |
| GET | `/api/playlists/:userId` | Get user playlists |
| GET | `/api/recommendations/:userId` | Get track recommendations |

## Important

This service currently uses the **legacy** recommendation engine. A migration to the new AI-powered engine is planned. See the [Migration Guide](migration.md) for details.
