import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../service/api';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

function Cast({movie}) {
  const {id} = movie;
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    getMovieCredits(id)
      .then(result => {
        console.log(result);
        return setCredits(result);
      });
  }, [movie, id]);

  return (
    credits && (
      <ul className="">{
        credits.cast.map(({id, name, character, profile_path}) => {
          return (
            <li key={id}>
              <img src={`${IMAGE_URL}${profile_path}`} alt={name}/>
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })
      }</ul>
    )
  );
}

export default Cast;