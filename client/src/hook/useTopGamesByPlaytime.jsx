import { useState, useEffect } from 'react';

const useTopGamesByPlaytime = (url) => {
  const [topGames, setTopGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        setTopGames(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { topGames, loading, error };
};

export default useTopGamesByPlaytime;
