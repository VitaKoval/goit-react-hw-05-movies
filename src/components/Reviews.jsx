import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieIdReviews } from '../services/API';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieIdReviews(movieId).then(({ data }) => setReviews(data.results));
  }, [movieId]);

  console.log(Boolean(reviews));
  return (
    <div>
      <ul></ul>
      <ul>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content, created_at }) => (
            <li key={id}>
              <p>
                {author} ({created_at})
              </p>
              <p>{content}</p>
            </li>
          ))}
      </ul>
      {reviews.length === 0 && (
        <div>Oops, there are no reviews for this movie!</div>
      )}
    </div>
  );
};
