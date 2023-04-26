import React from 'react';
import TopGames from '../topGame/top-game.components';
import useTopGamesByPlaytime from './../../hook/useTopGamesByPlaytime';

const TopGamesByPlaytime = () => {
  const { games, loading, error } = useTopGamesByPlaytime('/api/select_top_by_playtime');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <TopGames title="Top Games by Playtime" games={games} />;
};

export default TopGamesByPlaytime;
