const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `0acbef793912116e8168b05c9b24e1e7`;
const TRENDING_FILMS = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
const SEARCH_FILMS = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false`;

export function getTrending(page) {
  const url = `${TRENDING_FILMS}&page=${page}`;
  return fetch(url).then(res => res.json());
}

export function searchFilms(searchQuery, page) {
  return fetch(`${SEARCH_FILMS}&query=${searchQuery}&page=${page}`).then(res =>
    res.json()
  );
}

export function getMovieDetails(id) {
  console.log(id);
  return fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then(res => res.json());
}
export async function getMovieCredits(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();
  return data.cast;
}

export async function getMovieReviews(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results;
}
