import React, { useState } from 'react';
import './new-game.styles.css'
import useAddNewGame from '../../hook/useAddNewGame';

const AddNewGame = () => {
  const { addNewGame, error } = useAddNewGame('/api/games');
  const [gameData, setGameData] = useState({
    userId:'',
    game: '',
    genre: '',
    platforms: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'platforms') {
      const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
      setGameData({ ...gameData, [name]: selectedOptions });
    } else {
      setGameData({ ...gameData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    await addNewGame(gameData);
  };

  return (
    <div className="add-new-game">
      <h2>Add New Game</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="game">Game</label>
          <input type="text" name="game" id="game" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input type="text" name="genre" id="genre" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="platforms">Platforms</label>
          <select name="platforms" id="platforms" multiple onChange={handleChange}>
            <option value="PC">PC</option>
            <option value="PS4">PS4</option>
            <option value="XBOX">XBOX</option>
            <option value="Switch">Switch</option>
            <option value="Android">Android</option>
            <option value="iOS">iOS</option>
          </select>
        </div>
        <button className='btn' type="submit">Add Game</button>
      </form>
    </div>
  );
};

export default AddNewGame;