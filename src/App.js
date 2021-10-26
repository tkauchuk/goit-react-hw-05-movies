import { Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage';

// import HomePage from './views/HomePage';


function App() {
  return (
    <Fragment>

      <Header>
        <Navigation />
      </Header>

      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/movies' exact>

        </Route>
        <Route path='/movies/:id'>
          <MovieDetailsPage />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
