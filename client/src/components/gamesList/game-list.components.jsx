import React from 'react';
import GameCard from '../card/game-card.components';
import './game-list.styles.css';
import useGamesList from './../../hook/useGamesList';

const GamesList = () => {
  const { games, loading, error } = useGamesList('/api/games');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="games-list">
      {games.map((game) => (
        <GameCard key={game.game} game={game} />
      ))}
    </div>
  );
};

export default GamesList;
