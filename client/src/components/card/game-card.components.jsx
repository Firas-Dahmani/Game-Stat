import React from 'react';
import './game-card.style.css';

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <h3>{game.game}</h3>
      <p>Genre: {game.genre}</p>
      <p>Platforms: {game.platforms.join(', ')}</p>
      <p>Total Playtime: {game.totalPlayTime}</p>
      <p>Total Players: {game.totalPlayers}</p>
    </div>
  );
};

export default GameCard;
