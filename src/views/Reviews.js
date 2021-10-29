import { useEffect, useState } from 'react';
import { getMovieReviews } from '../service/api';

function Reviews({movie}) {
  const { id } = movie;
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(id)
      .then(({ results }) => {
        return setReviews(results);
      })
  }, [id, movie])


  return (
    reviews &&
    reviews.length > 0
      ? (
        <ul className="reviews-list">{
          reviews.map(({id, author, content}) => {
            return (
              <li className="reviews-list-item" key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        }</ul>
      )
      : (
        <p className="default-review">We don't have any reviews for this movie.</p>
      )
  );
}

export default Reviews;