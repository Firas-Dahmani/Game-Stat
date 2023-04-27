const request = require('supertest');
const app = require('../app'); // Import your app.js file here

describe('Games API', () => {
  // Test GET /games
  it('should get all games', async () => {
    const res = await request(app).get('/api/games');
    await expect(res.body.length).toBeGreaterThan(0);
  });

});
