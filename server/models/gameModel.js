const data = require('../config/data');

exports.select_top_by_playtime = (options = {}) => {
  const { genre, platform } = options;

  let filteredGames = data.slice();

  if (genre) {
    filteredGames = filteredGames.filter(game => game.genre === genre);
  }

  if (platform) {
    filteredGames = filteredGames.filter(game => game.platforms.includes(platform));
  }

  filteredGames.sort((a, b) => b.playTime - a.playTime);

  return filteredGames;
};

const countUniquePlayers = (game) => {
  const uniquePlayers = new Set();
  game.forEach((player) => {
    uniquePlayers.add(player.userId);
  });
  return uniquePlayers.size;
};

exports.select_top_by_players = (options = {}) => {
  const { genre, platform } = options;

  let filteredGames = data.slice();

  if (genre) {
    filteredGames = filteredGames.filter(game => game.genre === genre);
  }

  if (platform) {
    filteredGames = filteredGames.filter(game => game.platforms.includes(platform));
  }

  filteredGames.sort((a, b) => countUniquePlayers(b) - countUniquePlayers(a));

  return filteredGames;
};

// ----------- CRUD Logic --------------------

exports.createGame = (gameData) => {

  const newGame = {
    userId: gameData.userId,
    game: gameData.game,
    playTime: gameData.playTime,
    genre: gameData.genre,
    platforms: gameData.platforms,
  };

  data.push(newGame);

  return newGame;
};

exports.getGame = (gameId) => {
  return data.find(game => game.userId === gameId);
};

exports.getAllGames = () => {
  return data;
};

exports.updateGame = (gameId, updatedGame) => {
  const index = data.findIndex(game => game.userId === gameId);

  if (index === -1) {
    return null;
  }

  data[index] = { ...data[index], ...updatedGame };
  return data[index];
};

exports.deleteGame = (gameId) => {
  const index = data.findIndex(game => game.userId === gameId);

  if (index === -1) {
    return null;
  }

  const deletedGame = data[index];
  data.splice(index, 1);
  return deletedGame;
};

