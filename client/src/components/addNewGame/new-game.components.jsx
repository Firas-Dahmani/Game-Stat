import React, { useState } from 'react';
import './new-game.styles.css';
import useAddNewGame from './../../hook/useAddNewGame';

const AddNewGame = () => {
  const { addNewGame, error } = useAddNewGame('/api/games');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewGame(gameData);
  };

  if (error) return <div>Error: {error}</div>;

  const [gameData, setGameData] = useState({
    game: '',
    genre: '',
    platforms: '',
  });

  const handleChange = (e) => {
    setGameData({ ...gameData, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-game">
      <h2>Add New Game</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Game Name:
          <input type="text" name="game" value={gameData.game} onChange={handleChange} required />
        </label>
        <label>
          Genre:
          <input type="text" name="genre" value={gameData.genre} onChange={handleChange} required />
        </label>
        <label>
          Platforms:
          <input type="text" name="platforms" value={gameData.platforms} onChange={handleChange} required />
        </label>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};

export default AddNewGame;
