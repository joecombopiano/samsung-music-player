const legacyReco = require('music-player-recommendation-engine');

function getRecommendationsForUser(userId, callback) {
  legacyReco.getRecommendations(userId, (err, recs) => {
    if (err) return callback(err);
    callback(null, recs);
  });
}

function getRecommendationsByGenre(genre, limit, callback) {
  legacyReco.getRecommendationsByGenre(genre, { limit }, (err, recs) => {
    if (err) return callback(err);
    callback(null, recs);
  });
}

module.exports = {
  getRecommendationsForUser,
  getRecommendationsByGenre,
};
