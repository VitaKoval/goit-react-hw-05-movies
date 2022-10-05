import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import { getFilmById } from '../services/API';
import { poster } from '../services/processing';
import {
  LinkBack,
  Vote,
  DetailsTitle,
  DetailsList,
  DetailItem,
  DetailLink,
} from './ui/MovieDetails';
import { Container } from './ui/AppBar';

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

  // console.log('location DETALIES', location.state.from);
  return (
    <Container>
      <div>
        <LinkBack to={location.state?.from ?? '/'}>
          <GrLinkPrevious />
        </LinkBack>
        <div>
          <img src={poster(poster_path)} alt={title} width="200" />
          <DetailsTitle>
            {title} ({release_date?.slice(0, 4)})
          </DetailsTitle>
          <Vote>User vote: {vote_average?.toFixed(1)} </Vote>
          <p>{overview}</p>
        </div>
        <div>
          <DetailsList>
            <DetailItem>
              <DetailLink to="cast" state={{ from: location.state.from }}>
                Cast
              </DetailLink>
            </DetailItem>
            <DetailItem>
              <DetailLink to="reviews" state={{ from: location.state.from }}>
                Reviews
              </DetailLink>
            </DetailItem>
          </DetailsList>
          <Outlet />
        </div>
      </div>
    </Container>
  );
};
