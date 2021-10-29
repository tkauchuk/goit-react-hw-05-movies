import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

function MoviesList({movies, location}) {
  return (
    <ul className={styles.list}>{
      movies.map(({ id, title }) => {
        return (
          <li className={styles.item} key={id}>
            <Link to={{
              pathname: `/movies/${id}`,
              state: {from: location}
            }}>{
              title
            }</Link>
          </li>
        );
      })
    }</ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
}

export default MoviesList;