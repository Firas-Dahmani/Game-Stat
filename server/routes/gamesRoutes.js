const express = require('express');
const gamesController = require('../controllers/gamesController');

const router = express.Router();

router.post('/games', gamesController.createGame);
router.get('/games/:id', gamesController.getGame);
router.get('/games', gamesController.getGames);
router.put('/games/:id', gamesController.updateGame);
router.delete('/games/:id', gamesController.deleteGame);

router.get('/select_top_by_playtime', gamesController.selectTopByPlaytime);
router.get('/select_top_by_players', gamesController.selectTopByPlayers);

module.exports = router;