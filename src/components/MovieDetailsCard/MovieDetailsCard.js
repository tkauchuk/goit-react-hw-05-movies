import styles from './MovieDetailsCard.module.css';
import defaultFilmImage from '../default-film-image.png';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

function MovieDetailsCard({movie}) {
  const { poster_path: path, title, vote_average: vote, overview, genres } = movie;

  return (
    <div className={styles.container}>
      <img className="film-img" src={path ? `${IMAGE_URL}${path}` : defaultFilmImage} alt={title} />
      <div className={styles.description}>
        <h1>{title}</h1>
        <p className={styles.score}>User score: {vote}</p>
        <h2>Overview</h2>
        <p className={styles.overview}>{overview}</p>
        <h3>Genres</h3>
        <ul className={styles.list}>{
          genres.map(({ id, name }) => {
            return (
              <li className={styles.item} key={id}>{name}</li>);
          })
        }
        </ul>
    </div>
    </div>
  );
}


export default MovieDetailsCard;