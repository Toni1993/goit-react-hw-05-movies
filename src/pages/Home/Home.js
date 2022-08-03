import { useState, useEffect } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';

import { getTrending } from '../../servises/Api';
import { Title } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrending(page)
      .then(movies => movies.results)
      .then(data => setMovies(data))
      .catch(error => console.log(error));
  }, [page]);

  return (
    <>
      <Title>TRENDING MOVIES</Title>
      <MoviesList movies={movies}></MoviesList>
    </>
  );
}
