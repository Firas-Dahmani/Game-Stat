import { useState } from 'react';

const useUpdateGame = (url) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);

  const updateGame = async (gameId, updatedGameData) => {
    setError(null);

    try {
      const response = await fetch(`/api/games/${gameId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedGameData),
      });

      if (!response.ok) {
        throw new Error('Failed to update game.');
      }

      setIsUpdating(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return { isUpdating, error, updateGame };
};

export default useUpdateGame;
