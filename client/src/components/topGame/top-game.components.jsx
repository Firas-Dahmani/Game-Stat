import React from 'react';
import GameCard from '../card/game-card.components';
import './top-game.styles.css';
import {createId} from '../../utils/createId';

const TopGames = ({ title, games }) => {
  
  return (
    <div className="top-games">
      <h2>{title}</h2>
      <div className="games-list">
        {games.map((game) => (
          <GameCard key={createId(game.game)} game={game} />
        ))}
      </div>
    </div>
  );
};

export default TopGames;
