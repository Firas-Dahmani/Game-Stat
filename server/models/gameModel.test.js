const {
  getAllGames,
} = require('./gameModel');

describe('Game Model', () => {
  // Test getGames
  it('should get all games', async () => {
    const games = getAllGames();
    expect(games.length).toBeGreaterThan(0);
  });

});
