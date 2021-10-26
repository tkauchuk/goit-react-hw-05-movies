import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

import { getTrendingMovies } from '../../service/api';

function HomePage() {
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(({ results }) => {
         return setTrends(results);
      })
  }, []);

  return (
    <ul className="">{
      trends && (
        trends.map(({id, title}) => {
          return (
            <li key={id} className="">
              <Link to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          );
        })
      )
    }</ul>
  );
}

export default HomePage;