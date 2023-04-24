const express = require('express');
const gamesController = require('../controllers/gamesController');

const router = express.Router();

router.post('/games', gamesController.createGame);
router.get('/games/:id', gamesController.getGame);
router.get('/games', gamesController.getGames);
router.put('/games/:id', gamesController.updateGame);
router.delete('/games/:id', gamesController.deleteGame);

router.get('/select_top_by_playtime', gamesController.select_top_by_playtime);
router.get('/select_top_by_players', gamesController.select_top_by_players);

module.exports = router;