const key = '26ba31fe837edc267c38ad3040a26a5d';
const URL = 'https://api.themoviedb.org/3';

function getCertainMovies(url) {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Not found'));
    });
}

export function getTrendingMovies() {
  const query = `${URL}/trending/movie/day?api_key=${key}`;
  return getCertainMovies(query);
}

function getMoviesByKeyword() {

}

export function getMovieDetails(id) {
  const query = `${URL}/movie/${id}?api_key=${key}`;
  return getCertainMovies(query);
}

export function getMovieCredits(id) {
  const query = `${URL}/movie/${id}/credits?api_key=${key}`;
  return getCertainMovies(query);
}

export function getMovieReviews(id) {
  const query = `${URL}/movie/${id}/reviews?api_key=${key}`;
  return getCertainMovies(query);
}



