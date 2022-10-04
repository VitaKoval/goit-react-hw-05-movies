import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFilmById } from '../../services/API';

export const MovieDetails = () => {
    const location = useLocation();
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
//   console.log('detalies', movieId);

  useEffect(() => {
    getFilmById(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

//   console.log(movieDetails);
  const { poster_path, title, release_date, vote_average, overview } =
    movieDetails;

  const posterPath = poster_path => {
    return 'https://image.tmdb.org/t/p/w500/' + poster_path;
  };
// console.log('location DETALIES', location.state.from)
  return (
      <>
          <Link to={location.state?.from ?? '/'}>Back</Link>
      <div>
        <img src={posterPath(poster_path)} alt={title} width="200" />
        <h3>
          {title} ({release_date})
        </h3>
        <p>User vote: {vote_average} </p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <p>Genres</p>
      </div>
      <div>
        {' '}
        Дополнительная информация
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
              </ul>
              <Outlet />
      </div>
    </>
  );
};
