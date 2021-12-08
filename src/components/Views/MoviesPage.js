import s from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { searchFilms } from '../../Api/Api';
import MoviesList from '../MoviesList';

export default function MoviesPage() {
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
      <div className={s.search}>
        <form className={s.form} onSubmit={onSubmit}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter search query"
            onChange={e => setQuery(e.target.value.toLowerCase())}
            value={query}
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </form>
      </div>
      {movies && <MoviesList movies={movies} />}
      <ToastContainer autoClose={3000} />
    </>
  );
}
