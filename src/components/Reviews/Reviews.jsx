import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieIdReviews } from '../../services/API';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieIdReviews(movieId).then(({ data }) => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
          <ul>{reviews && reviews.map(({ id, author, content, created_at }) => <li key={id}>
              <p>{author} ({created_at})</p>
              <p>{content}</p>
      </li>)}</ul>
    </div>
  );
};
