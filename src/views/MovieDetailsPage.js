import { useState, useEffect, lazy, Suspense, Fragment } from 'react';
import { useRouteMatch, useParams, useLocation, useHistory, NavLink, Route } from 'react-router-dom';

import MovieDetailsCard from '../components/MovieDetailsCard';
import { getMovieDetails } from '../service/api';

const Cast = lazy(() =>
  import('./Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews" */)
)

function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    const idNormalized = Number(id);
    getMovieDetails(idNormalized)
      .then(result => {
        return setMovie(result);
      })
  }, [id])

  const onGoBackClick = () => {
    history.push(location?.state?.from ?? '/');
  }

  return (
    movie && (
      <Fragment>
        <button type='button' className='button' onClick={onGoBackClick}>Go back!</button>
        <MovieDetailsCard
          movie={movie}
        />
        <div className='additional-info-wrapper'>
          <p className='additional-info-text'>Additional information</p>
          <ul className='additional-info-list'>
            <li>
              <NavLink to={{
                pathname: `${url}/cast`,
                state: {
                  from: location?.state?.from,
                },
              }}
                       className='cast-link'
                       activeClassName='active-cast-link'
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: `${url}/reviews`,
                state: {
                  from: location?.state?.from,
                },
              }}
                       className='cast-link'
                       activeClassName='active-cast-link'
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<h1>Loading</h1>}>
          <Route path='/movies/:id/cast'>
            <Cast movie={movie} />
          </Route>
          <Route path='/movies/:id/reviews'>
            <Reviews movie={movie} />
          </Route>
        </Suspense>
      </Fragment>
    )
  );
}

export default MovieDetailsPage;