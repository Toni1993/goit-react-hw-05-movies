import { useState, useEffect, Suspense } from 'react';

import { getMovieDetails } from '../../servises/Api';
import {
  NavLink,
  useParams,
  useLocation,
  useNavigate,
  Outlet,
} from 'react-router-dom';

import { Box } from 'components/Box';
import { ImageWrap } from './MovieDetails.styled';
import { Image } from './MovieDetails.styled';
import { Description } from './MovieDetails.styled';
import { Title } from './MovieDetails.styled';
import { Subtitle } from './MovieDetails.styled';
import { Overviev } from './MovieDetails.styled';
import { List } from './MovieDetails.styled';
import { Item } from './MovieDetails.styled';
import { Buttonlink } from './MovieDetails.styled';
import { Buttonback } from './MovieDetails.styled';
import Loader from 'components/Loader';

export default function MovieDetails() {
  const [filmDetails, setFilmDetails] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    getMovieDetails(id).then(setFilmDetails);
  }, [id]);

  const onClickBack = () => {
    navigation(location?.state?.from ?? '/');
  };

  const imageSrc = filmDetails.poster_path
    ? `https://image.tmdb.org/t/p/w300${filmDetails.poster_path}`
    : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`;

  return (
    <div>
      <Buttonback type="button" onClick={onClickBack}>
        Go back
      </Buttonback>
      <Box bg="#e7c7c7" p="40px" display="flex" alignItems="center">
        <ImageWrap>
          <Image src={imageSrc} alt={filmDetails.original_title} />
        </ImageWrap>

        <div>
          <Description>
            <Title>{filmDetails.original_title}</Title>
            <Subtitle>Overview</Subtitle>
            <Overviev>{filmDetails.overview}</Overviev>
            <Subtitle>Genres</Subtitle>
            <List>
              {filmDetails.genres?.map(
                genre =>
                  filmDetails.genres && (
                    <Item key={genre.id}>
                      <p>{genre.name}</p>
                    </Item>
                  )
              )}
            </List>
          </Description>

          <List>
            <Item key={0}>
              <NavLink
                to={{
                  pathname: 'cast',
                }}
                state={location.state}
              >
                <Buttonlink type="button">Cast</Buttonlink>
              </NavLink>
            </Item>
            <Item key={1}>
              <NavLink
                to={{
                  pathname: 'reviews',
                }}
                state={location.state}
              >
                <Buttonlink type="button">Reviews</Buttonlink>
              </NavLink>
            </Item>
          </List>
        </div>
      </Box>

      <Suspense fallback={<Loader size={'200px'} color={'#640a0a'} />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
