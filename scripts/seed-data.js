const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');

console.log('Seeding data for android-music-player...');
console.log(`  Tracks: ${JSON.parse(fs.readFileSync(path.join(dataDir, 'tracks.json'))).length} loaded`);
console.log(`  Users:  ${JSON.parse(fs.readFileSync(path.join(dataDir, 'users.json'))).length} loaded`);
console.log('Data initialization complete.');
