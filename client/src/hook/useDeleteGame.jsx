import { useState } from 'react';

const useDeleteGame = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const deleteGame = async (id) => {
    setIsDeleting(true);
    setError(null);

    try {
      const response = await fetch(`/api/games/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete game.');
      }

      setIsDeleting(false);
    } catch (error) {
      setError(error.message);
      setIsDeleting(false);
    }
  };

  return { isDeleting, error, deleteGame };
};

export default useDeleteGame;
