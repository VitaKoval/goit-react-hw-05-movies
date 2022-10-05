import PropTypes from 'prop-types';
import { Card, CardLink, ImgCard, CardTitle, CardInfo } from './ui/Home';
import { poster } from '../services/processing';
import { useLocation } from 'react-router-dom';

export const ListMovie = ({ movies }) => {
  const location = useLocation();
  // console.log(location.pathname);
  //   console.log(movies);

  return movies.map(({ id, poster_path, title, name, vote_average }) => (
    <Card key={id}>
      <CardLink
        to={location.pathname === '/' ? `movies/${id}` : `${id}`}
        state={{ from: location }}
      >
        <ImgCard src={poster(poster_path)} alt={title || name} />
        <CardTitle>{title || name}</CardTitle>
        <CardInfo>{vote_average}</CardInfo>
      </CardLink>
    </Card>
  ));
};

ListMovie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ),
};
