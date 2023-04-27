import React, { useState } from 'react';
import './game-card.style.css';
import useUpdateGame from '../../hook/useUpdateGame';

const GameUpdateForm = ({ game, closeModal, setLocalGame }) => {
  const { updateGame } = useUpdateGame();

  const [formData, setFormData] = useState({
    game: game.game,
    genre: game.genre,
    playTime: game.playTime,
    platforms: game.platforms,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedGame = await updateGame(game.userId, formData);
    setLocalGame(formData);
    closeModal();
  };

  return (
    <>
      <div >
        <form className="game-update-form" onSubmit={handleSubmit}>
          <label htmlFor="game">Game</label>
          <input
            type="text"
            name="game"
            value={formData.game}
            onChange={handleChange}
          />
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
          <label htmlFor="playTime">Play Time</label>
          <input
            type="number"
            name="playTime"
            value={formData.playTime}
            onChange={handleChange}
          />
          <label htmlFor="platforms">Platforms</label>
          <input
            type="text"
            name="platforms"
            value={formData.platforms}
            onChange={handleChange}
          />
          <button className='btn' type="submit">Update Game</button>
        </form>
      </div>
    </>
  );
};

export default GameUpdateForm;
