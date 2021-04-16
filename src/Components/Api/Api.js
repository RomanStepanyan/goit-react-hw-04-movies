import axios from 'axios';
const API_KEY = '9188dc7af85ddfe1314f5060338d54ff';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;

export async function getPopularMovies(page = 1) {
  const res = await axios.get(
    `/trending/all/day?api_key=${API_KEY}&page=${page}`,
  );
  return res.data;
}

export async function getSearchedMovies(keyWord, page = 1) {
  const res = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${keyWord}&language=en-US&page=${page}&include_adult=false`,
  );
  return res.data;
}

export async function getMovieDetails(movie_id) {
  const res = await axios.get(
    `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`,
  );
  return res.data;
}

export async function getMovieCredits(movie_id) {
  const res = await axios.get(
    `/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`,
  );
  return res.data;
}

export async function getMoviesReviews(movie_id, page = 1) {
  const res = await axios.get(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
  return res.data;
}
