import React from 'react';
import TopGames from '../topGame/top-game.components';
import useTopGamesByPlayers from './../../hook/useTopGamesByPlayers';

const TopGamesByPlayers = () => {
  const { topGames, loading, error } = useTopGamesByPlayers('/api/select_top_by_players');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <TopGames title="Top Games by Players" games={topGames} />;
};

export default TopGamesByPlayers;
