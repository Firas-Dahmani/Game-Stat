const gameModel = require('../models/gameModel');

exports.select_top_by_playtime = (req, res) => {
  const options = {
    genre: req.query.genre,
    platform: req.query.platform,
  };

  const topGames = gameModel.select_top_by_playtime(options);
  res.status(200).json(topGames);
};

exports.select_top_by_players = (req, res) => {
  const options = {
    genre: req.query.genre,
    platform: req.query.platform,
  };

  const topGames = gameModel.select_top_by_players(options);
  res.status(200).json(topGames);
};

// ----- Crud functions ----------------------

exports.createGame = (req, res) => {
  const gameData = req.body;
  const newGame = gameModel.createGame(gameData);
  res.json(newGame);
};

exports.getGame = (req, res) => {
  const gameId = parseInt(req.params.id);
  const game = gameModel.getGame(gameId);

  if (!game) {
    res.status(404).json({ message: 'Game not found' });
    return;
  }

  res.status(200).json(game);
};

exports.getGames = (req, res) => {
  const games = gameModel.getAllGames();
  res.status(200).json(games);
};

exports.updateGame = (req, res) => {
  const gameId = parseInt(req.params.id);
  const updatedGame = req.body;

  const game = gameModel.updateGame(gameId, updatedGame);

  if (!game) {
    res.status(404).json({ message: 'Game not found' });
    return;
  }

  res.status(200).json(game);
};

exports.deleteGame = (req, res) => {
  const gameId = parseInt(req.params.id);
  console.log(gameId);

  const deletedGame = gameModel.deleteGame(gameId);

  if (!deletedGame) {
    res.status(404).json({ message: 'Game not found' });
    return;
  }

  res.status(200).json(deletedGame);
};

