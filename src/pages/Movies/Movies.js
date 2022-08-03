import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { searchFilms } from '../../servises/Api';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Box } from 'components/Box';
import { Form } from './Movies.styled';
import { Button } from './Movies.styled';
import { Input } from './Movies.styled';

export default function Movies() {
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (location.search !== '') {
      const prevQuery = location.search.split('=')[1];
      searchFilms(prevQuery)
        .then(films => films.results)
        .then(arr => {
          if (arr.length === 0)
            toast.error(`No films for request: ${prevQuery}`);

          setMovies(arr);
        });
      setQuery(prevQuery);
    }
  }, [location.search]);

  const onSubmit = e => {
    e.preventDefault();
    navigate(`?query=${query}`);
    if (query.trim() === '') {
      toast.error('Please, enter more specific query');
    }
  };

  return (
    <>
      <Box bg="#e7c7c7" p="20px" display="flex" justifyContent="center">
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter search query"
            onChange={e => setQuery(e.target.value.toLowerCase())}
            value={query}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Box>
      <Outlet />
      {movies && <MoviesList movies={movies} />}
      <ToastContainer autoClose={3000} />
    </>
  );
}
