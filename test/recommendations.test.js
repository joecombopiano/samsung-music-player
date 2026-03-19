const { getRecommendationsForUser } = require('../src/services/recommendation');

jest.mock('music-player-recommendation-engine', () => ({
  getRecommendations: (userId, cb) => {
    cb(null, [
      { trackId: 'track_001', score: 0.95 },
      { trackId: 'track_003', score: 0.87 },
    ]);
  },
  getRecommendationsByGenre: (genre, opts, cb) => {
    cb(null, [
      { trackId: 'track_009', score: 0.91 },
    ]);
  },
}));

describe('Legacy Recommendation Engine', () => {
  test('returns recommendations for a user', (done) => {
    getRecommendationsForUser('user_001', (err, recs) => {
      expect(err).toBeNull();
      expect(recs).toHaveLength(2);
      expect(recs[0]).toHaveProperty('trackId');
      expect(recs[0]).toHaveProperty('score');
      done();
    });
  });
});
