import { NavLink, useLocation } from 'react-router-dom';

import { Box } from 'components/Box';
import { List } from './MoviesList.styled';
import { Item } from './MoviesList.styled';
import { MovieInfo } from './MoviesList.styled';
import { MovieTitle } from './MoviesList.styled';
import { MovieRating } from './MoviesList.styled';
import { MovieImg } from './MoviesList.styled';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <List>
      {movies.map(
        movie =>
          movie.original_title && (
            <Item key={movie.id}>
              <NavLink
                to={`/movies/${movie.id}`}
                state={{
                  from:
                    location.pathname === '/'
                      ? '/'
                      : '/movies' + location.search,
                }}
              >
                <Box width="275px" p="5px">
                  {movie.poster_path ? (
                    <MovieImg
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt={movie.original_title}
                    />
                  ) : (
                    <MovieImg
                      src="https://bookslibs.info/assets/general/images/no_poster.jpg"
                      alt={movie.original_title}
                    />
                  )}
                </Box>
                <MovieInfo>
                  <MovieTitle>{movie.original_title}</MovieTitle>
                  <MovieRating>{movie.vote_average}</MovieRating>
                </MovieInfo>
              </NavLink>
            </Item>
          )
      )}
    </List>
  );
}
