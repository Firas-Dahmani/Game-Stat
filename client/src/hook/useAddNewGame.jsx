import { useState } from 'react';

const useAddNewGame = (url) => {
  const [error, setError] = useState(null);

  const addNewGame = async (gameData) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData),
      });
      if (!response.ok) {
        throw new Error('Error adding new game');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return { addNewGame, error };
};

export default useAddNewGame;
