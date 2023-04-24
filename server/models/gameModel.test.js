const {
  createGame,
  getGames,
  updateGame,
  deleteGame,
  select_top_by_playtime,
  select_top_by_players,
} = require('./gameModel');

describe('Game Model', () => {
  // Test createGame
  it('should create a new game', () => {
    const newGame = {
      userId: 9,
      game: 'Test Game',
      playTime: 1000,
      genre: 'Test Genre',
      platforms: ['PC'],
    };
    const result = createGame(newGame);
    expect(result).toEqual(newGame);
  });

  // Test getGames
  it('should get all games', () => {
    const games = getGames();
    expect(games.length).toBeGreaterThan(0);
  });

  // Add more tests for updateGame, deleteGame, select_top_by_playtime, and select_top_by_players
});
