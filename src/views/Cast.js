import { useEffect, useState } from 'react';
import { getMovieCredits } from '../service/api';
import defaultImage from '../components/default-user-image.png';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

function Cast({movie, source}) {
  const {id} = movie;
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    getMovieCredits(id)
      .then(result => {
        return setCredits(result);
      });
  }, [movie, id]);

  return (
    credits && (
      <ul className="cast-list">{
        credits.cast.map(({id, name, character, profile_path: path}) => {
          return (
            <li className="cast-list-item" key={id}>
              <img className="cast-image" src={ path ? `${IMAGE_URL}${path}` : defaultImage } alt={name}/>
              <p>{name}</p>
              <p>Character: {character ? character : "Doesn't say"}</p>
            </li>
          );
        })
      }</ul>
    )
  );
}

export default Cast;