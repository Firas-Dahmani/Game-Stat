import React from 'react';
import GameCard from '../card/game-card.components';
import './game-list.styles.css';
import useGamesList from './../../hook/useGamesList';
import {createId} from './../../utils/createId';
import { API_URL } from '../../utils/api';

const GamesList = () => {
  const { games, loading, error } = useGamesList(`${API_URL}/games`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="games-list">
      {games.map((game) => (
        <GameCard key={createId(game.game)} game={game} />
      ))}
    </div>
  );
};

export default GamesList;
