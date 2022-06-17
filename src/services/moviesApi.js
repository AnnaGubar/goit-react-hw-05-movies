import axios from 'axios';

const KEY = '60602d7d98238c7dbe59ac7831dbe9a7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
  return response.data;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);
  return response.data;
}

export async function fetchSearchValue(searchValue) {
  const response = await axios.get(`search/movie?api_key=${KEY}&query=${searchValue}&page=1`);
  return response.data;
}
