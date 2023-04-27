import React, { useState } from 'react';
import TopGames from '../topGame/top-game.components';
import useTopGamesByPlaytime from './../../hook/useTopGamesByPlaytime';
import Dropdown from '../dropdown/dropdown.components';

const TopGamesByPlaytime = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const { games, loading, error } = useTopGamesByPlaytime(`/api/select_top_by_playtime?genre=${selectedGenre}&platform=${selectedPlatform}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <>
      <Dropdown 
        setSelectedGenre={setSelectedGenre} 
        selectedGenre={selectedGenre} 
        setSelectedPlatform={setSelectedPlatform} 
        selectedPlatform={selectedPlatform} />

      <TopGames title="Top Games by Playtime" games={games} />;
    </>
  ) 
};

export default TopGamesByPlaytime;
