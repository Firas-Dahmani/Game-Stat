const request = require('supertest');
const app = require('../app'); // Import your app.js file here

describe('Games API', () => {
  // Test GET /games
  it('should get all games', async () => {
    const res = await request(app).get('/games');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // Add more tests for other API endpoints like POST /games, PUT /games/:id, DELETE /games/:id, etc.
});
