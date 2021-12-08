import { useState, useEffect, lazy, Suspense } from 'react';
import s from './MovieDetailsPage.module.css';
import { getMovieDetails } from '../../Api/Api';
import Loader from '../Loader';
import {
  Link,
  Route,
  useParams,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

const Reviews = lazy(() => import('../Reviews/Reviews.js'));
const Cast = lazy(() => import('../Cast/Cast.js'));

export default function MovieDetailsPage() {
  const [filmDetails, setFilmDetails] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    return getMovieDetails(id).then(setFilmDetails);
  }, [id]);
  console.log(filmDetails);
  const onClickBack = () => {
    const { from } = location.state;
    navigation(from);
  };
  return (
    <div>
      <button type="button" onClick={onClickBack} className={s.link_back}>
        {' '}
        Go back{' '}
      </button>
      <div className={s.container}>
        <div className={s.movie_img}>
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w300${filmDetails.poster_path}`}
            alt={filmDetails.original_title}
          />
        </div>
        <div>
          <div className={s.description}>
            <h2 className={s.title}>{filmDetails.original_title}</h2>
            <h3 className={s.title__mod}>Overview</h3>
            <p className={s.overviev}>{filmDetails.overview}</p>
            <h3 className={s.title__mod}>Genres</h3>
            <ul className={s.list}>
              {filmDetails.genres?.map(
                genre =>
                  filmDetails.genres && (
                    <li className={s.item} key={genre.id}>
                      <p>{genre.name}</p>
                    </li>
                  ),
              )}
            </ul>
          </div>

          <ul className={s.list}>
            <li key={0} className={s.list__item}>
              <Link
                to={{
                  pathname: 'cast',
                }}
                state={location.state}
              >
                <button type="button" className={s.link}>
                  Cast
                </button>
              </Link>
            </li>
            <li key={1} className={s.list__item}>
              <Link
                to={{
                  pathname: 'reviews',
                }}
                state={location.state}
              >
                <button type="button" className={s.link}>
                  Reviews
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast id={id} />} />
          <Route path="reviews" element={<Reviews id={id} />} />
        </Routes>
      </Suspense>
    </div>
  );
}
