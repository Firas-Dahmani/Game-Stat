let data = require('../config/data');

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

exports.select_top_by_players = (options = {}) => {
  const { genre, platform } = options;

  let filteredData = data;

  if (genre) {
    filteredData = filteredData.filter((game) => game.genre === genre);
  }

  if (platform) {
    filteredData = filteredData.filter((game) =>
      game.platforms.includes(platform)
    );
  }

  const playersCount = {};

  filteredData.forEach((game) => {
    if (playersCount[game.game]) {
      playersCount[game.game].players.add(game.userId);
    } else {
      playersCount[game.game] = { ...game, players: new Set([game.userId]) };
    }
  });

  const topGamesByPlayers = Object.values(playersCount)
    .map((game) => ({ ...game, players: game.players.size }))
    .sort((a, b) => b.players - a.players);

  return topGamesByPlayers;
};
// ----------- CRUD Logic --------------------

exports.createGame = (gameData) => {

  const newGame = {
    userId: data.length + 1,
    game: gameData.game,
    playTime: 0,
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


//the userId is not unique
exports.deleteGame = (id) => {
  const index = data.findIndex(game => game.userId === id);

  if (index === -1) {
    return null;
  }

  const deletedGame = data.splice(index, 1)[0];

  return deletedGame
};

