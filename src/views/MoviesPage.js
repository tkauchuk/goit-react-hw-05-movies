import { useEffect, useState, Fragment } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import MoviesList from '../components/MoviesList';
import { getMoviesByKeyword } from '../service/api';

function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const [movieName, setMovieName] = useState( '');
  const [movie, setMovie] = useState(null);
  const [moviesFound, setMoviesFound] = useState(null);
  const [error, setError] = useState(null);

  const searchParams = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!movie) {
      return;
    }
    history.push({...location, search: `query=${movie}`});
  }, [movie]) //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!searchParams) {
      return;
    }
    getMoviesByKeyword(searchParams)
      .then(({results}) => {
        return setMoviesFound(results);
      })
      .catch(error => setError(error));
  }, [searchParams])

  const onInputChange = event => {
    const { value } = event.target;
    setMovieName(value);
  }
  const onFormSubmit = event => {
    event.preventDefault();
    if (movieName.trim().length === 0) {
      return;
    }
    setMovie(movieName);
  }

  return (
    <Fragment>
      <form onSubmit={onFormSubmit} className="form">
        <label>
          <input
            className="form-input"
            type="text"
            value={movieName}
            required
            autoComplete="off"
            onChange={onInputChange}
          />
        </label>
        <button type="submit" className="button">Search</button>
      </form>
      {error && (
        <h1>{error}</h1>
      )}
      {moviesFound && (
        <MoviesList
          movies={moviesFound}
          location={location}
        />
      )}
    </Fragment>
  );
}

export default MoviesPage;