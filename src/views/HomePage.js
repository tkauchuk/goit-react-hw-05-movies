import { useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import MoviesList from '../components/MoviesList';
import { getTrendingMovies } from '../service/api';

function HomePage() {
  const location = useLocation();
  const [trends, setTrends] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(({ results }) => {
        return setTrends(results);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <Fragment>
      {error && (
        <h1>{error}</h1>
      )}
      {trends && (
      <MoviesList
        movies={trends}
        location={location}
      />
      )}
    </Fragment>
  );
}

export default HomePage;