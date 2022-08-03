import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../../servises/Api';
import { List, Image, Castinfo, Title, Titlebox, Item } from './Cast.styled';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieCredits(id).then(setActors);
  }, [id]);
  return (
    <>
      {actors.length === 0 && (
        <Castinfo>We have no information about the cast</Castinfo>
      )}

      <List>
        {actors.map(
          actor =>
            actor.profile_path && (
              <Item key={actor.id}>
                <Image
                  src={'https://image.tmdb.org/t/p/w300/' + actor.profile_path}
                  alt={actor.name}
                />
                <Titlebox>
                  <Title>{actor.name}</Title>
                </Titlebox>
              </Item>
            )
        )}
      </List>
    </>
  );
}
