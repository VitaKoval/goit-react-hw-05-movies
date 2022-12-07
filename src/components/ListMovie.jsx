import PropTypes from 'prop-types';
import { Card, CardLink, ImgCard, CardTitle, CardInfo, CardReleaseDate } from './ui/Home';
import { poster } from '../services/processing';
import { useLocation } from 'react-router-dom';

export const ListMovie = ({ movies }) => {
  const location = useLocation();
  // console.log(location.pathname);
  console.log(movies);
  
  return movies.map(({ id, poster_path, title, name, vote_average, release_date, first_air_date }) => (
    <Card key={id} initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{amount: 0.2}}>
      <CardLink
        to={location.pathname === '/' ? `movies/${id}` : `${id}`}
        state={{ from: location }}
      >
        <ImgCard src={poster(poster_path)} alt={title || name} />
        <CardInfo>{vote_average?.toFixed(1)}</CardInfo>
        <CardTitle>{title || name}</CardTitle>
        <CardReleaseDate>{release_date?.slice(0, 4) || first_air_date?.slice(0,4)}</CardReleaseDate>
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
