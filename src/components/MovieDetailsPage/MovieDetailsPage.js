import { useState, useEffect, Fragment } from 'react';
import { useRouteMatch, useParams, Link, Route } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';

import { getMovieDetails } from '../../service/api';
import Cast from '../Cast';
import Reviews from '../Reviews';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    const idNormalized = Number(id);
    getMovieDetails(idNormalized)
      .then(result => {
        console.log(result);
        return setMovie(result);
      })
  }, [id])


  return (
    movie && (
      <Fragment>
        <div className={styles.container}>
          <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
          <div className=''>
            <h1>{movie.title}</h1>
            <p>User score: {movie.vote_average}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul className=''>{
              movie.genres.map(({ id, name }) => {
                return (
                  <li key={id}>{name}</li>);
              })
            }</ul>
          </div>
        </div>
        <div className="">
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={`${url}/cast`}>
                Cast
              </Link>
            </li>
            <li>
              <Link to={`${url}/reviews`}>
              Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Route path='/movies/:id/cast'>
          <Cast movie={movie} />
        </Route>
        <Route path='/movies/:id/reviews'>
          <Reviews movie={movie}/>
        </Route>
      </Fragment>
    )
  );
}

export default MovieDetailsPage;