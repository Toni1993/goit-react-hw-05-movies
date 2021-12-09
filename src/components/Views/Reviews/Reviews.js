import { useState, useEffect } from 'react';

import { getMovieReviews } from '../../../Api/Api';

import s from './Reviews.module.css';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    return getMovieReviews(id).then(setReviews);
  }, [id]);
  console.log(reviews);
  return (
    <>
      <ul className={s.list}>
        {reviews.length === 0 && (
          <div className={s.title}>
            Sorry, we did not find any reviews for this movie.
          </div>
        )}
        {reviews.author === [] && <div className={s.title}>No reviews</div>}

        {reviews.map(
          review =>
            review.author && (
              <li key={review.id} className={s.item}>
                <h2 className={s.title}>{review.author}</h2>
                <p className={s.description}>{review.content}</p>
                <span className={s.data}>{review.created_at.slice(0, 10)}</span>
              </li>
            ),
        )}
      </ul>
    </>
  );
}
