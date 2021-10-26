import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../service/api';

function Reviews({movie}) {
  const { id } = movie;
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(id)
      .then(result => {
        console.log(result);
        return setReviews(result);
      })
  }, [id, movie])


  return (
    reviews &&
    reviews.results.length > 0
      ? (
        <span>Reviews</span>
      )
      : (
        <p>No reviews</p>
      )
  );
}

export default Reviews;