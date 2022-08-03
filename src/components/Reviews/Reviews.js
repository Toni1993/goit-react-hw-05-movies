import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../servises/Api';
import { Title, List, Item, Description, Data } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieReviews(id).then(setReviews);
  }, [id]);

  return (
    <>
      <List>
        {reviews.length === 0 && (
          <Title>Sorry, we did not find any reviews for this movie.</Title>
        )}
        {reviews.author === [] && <Title>No reviews</Title>}

        {reviews.map(
          review =>
            review.author && (
              <Item key={review.id}>
                <Title>{review.author}</Title>
                <Description>{review.content}</Description>
                <Data>{review.created_at.slice(0, 10)}</Data>
              </Item>
            )
        )}
      </List>
    </>
  );
}
