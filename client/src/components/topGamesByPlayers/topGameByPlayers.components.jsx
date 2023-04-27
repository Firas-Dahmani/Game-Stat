import React, { useState } from 'react';
import TopGames from '../topGame/top-game.components';
import useTopGamesByPlayers from './../../hook/useTopGamesByPlayers';
import Dropdown from '../dropdown/dropdown.components';

const TopGamesByPlayers = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const { games, loading, error } = useTopGamesByPlayers(`/api/select_top_by_players?genre=${selectedGenre}&platform=${selectedPlatform}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <>
      <Dropdown 
        setSelectedGenre={setSelectedGenre} 
        selectedGenre={selectedGenre} 
        setSelectedPlatform={setSelectedPlatform} 
        selectedPlatform={selectedPlatform} />

      <TopGames title="Top Games by Players" games={games} />;
    </>
  )
};

export default TopGamesByPlayers;
