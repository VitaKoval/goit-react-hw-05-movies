import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieIdReviews } from '../services/API';
import { ReviewsList, ReviewsItem, ReviewsAuthor, ReviewsContent } from "./ui/Reviews";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieIdReviews(movieId).then(({ data }) => setReviews(data.results));
  }, [movieId]);

  console.log(Boolean(reviews));
  return (
    <div>
      <ReviewsList>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content, created_at }) => (
            <ReviewsItem key={id}>
              <ReviewsAuthor>
                {author} ({created_at})
              </ReviewsAuthor>
              <ReviewsContent>{content}</ReviewsContent>
            </ReviewsItem>
          ))}
      </ReviewsList>
      {reviews.length === 0 && (
        <div>Oops, there are no reviews for this movie!</div>
      )}
    </div>
  );
};
