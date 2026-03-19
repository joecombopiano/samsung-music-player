# Migrating to the New AI Recommendation Engine

This guide walks through migrating from the legacy `music-player-recommendation-engine` to the new `spotify-ai-recommendation` package.

---

## Overview

The new AI Recommendation Engine offers:
- Deep learning-based user behavior modeling
- Improved personalization and diversity
- Lower latency and better scalability

---

## Prerequisites

- Node.js v16 or above
- Access to the Spotify Developer Portal
- Credentials for both engines (legacy and new AI)
- Existing implementation using the legacy engine

---

## Step 1: Backup Your Current Implementation

Before proceeding, back up your current codebase and configuration files:

```bash
cp package.json package.json.bak
cp -r src/ src_legacy_backup/
```

---

## Step 2: Update `package.json`

Remove the old engine dependency:

```json
"dependencies": {
  "music-player-recommendation-engine": "^3.2.1"
}
```

Replace it with the new AI engine package:

```json
"dependencies": {
  "spotify-ai-recommendation": "^1.0.0"
}
```

Then install the new package:

```bash
npm install
```

---

## Step 3: Update Import Statements

Replace legacy imports like:

```javascript
const legacyReco = require('music-player-recommendation-engine');
```

With the new AI engine:

```javascript
const aiReco = require('spotify-ai-recommendation');
```

---

## Step 4: Adapt Recommendation Logic

### Legacy Example
```javascript
legacyReco.getRecommendations(userId, (err, recs) => {
  if (err) return console.error(err);
  console.log(recs);
});
```

### New AI Example
```javascript
aiReco.fetchAIRecommendations({ userId }).then(recs => {
  console.log(recs);
}).catch(console.error);
```

---

## Step 5: Test the Integration

Use mock user IDs to validate results:

```bash
npm run test:recommendations
```

Make sure you:
- Receive a valid list of track IDs
- Experience consistent response times

---

## Step 6: Deploy

Once testing is complete:

```bash
git commit -am "Migrate to new AI recommendation engine"
git push origin main
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `Module not found` | Ensure the new package was installed properly |
| `Empty response` | Confirm the user ID exists in the AI model |
| `Latency spikes` | Use caching where applicable |

---

## Support

For additional support, reach out via the #reco-eng Slack channel or email reco-support@spotify.com.
