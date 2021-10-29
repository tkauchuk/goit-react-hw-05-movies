import { lazy, Suspense, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';


import Section from './components/Section';
import Navigation from './components/Navigation';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */)
);



function App() {
  return (
    <Fragment>
      <Section>
        <Navigation />
      </Section>
      <Section>
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/movies' exact>
              <MoviesPage />
            </Route>
            <Route path='/movies/:id'>
              <MovieDetailsPage />
            </Route>
          </Switch>
        </Suspense>
      </Section>
    </Fragment>
  );
}

export default App;
