import { useState, useEffect } from 'react';

import { getMovieCredits } from '../../Api/Api';

import s from './Cast.module.css';

export default function Cast({ id }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    return getMovieCredits(id).then(setActors);
  }, [id]);
  console.log(actors);
  return (
    <>
      {actors.length === 0 && (
        <div className={s.title2}>We have no information about the cast</div>
      )}

      <ul className={s.list}>
        {actors.map(
          actor =>
            actor.profile_path && (
              <li key={actor.id} className={s.item}>
                <img
                  className={s.image}
                  src={'https://image.tmdb.org/t/p/w300/' + actor.profile_path}
                  alt={actor.name}
                />
                <div className={s.title_box}>
                  <h2 className={s.title}>{actor.name}</h2>
                </div>
              </li>
            ),
        )}
      </ul>
    </>
  );
}
