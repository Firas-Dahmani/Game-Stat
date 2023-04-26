import React from 'react';
import GameCard from '../card/game-card.components';
import './top-game.styles.css';

const TopGames = ({ title, games }) => {
  return (
    <div className="top-games">
      <h2>{title}</h2>
      <div className="top-games-list">
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default TopGames;
