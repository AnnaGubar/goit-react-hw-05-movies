import axios from 'axios';

const KEY = '60602d7d98238c7dbe59ac7831dbe9a7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data;
}

// export async function fetchEventById(id) {
//   const response = await axios.get(`events/${id}?apikey=${KEY}`);
//   return response.data;
// }
