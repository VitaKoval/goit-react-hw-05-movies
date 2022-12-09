import PropTypes from 'prop-types';
import {
  Card,
  CardLink,
  ImgCard,
  Img,
  CardTitle,
  CardInfo,
  CardRepleaseGenre,
  CardReleaseDate,
  CardGenre,
} from './ui/Home';
import { poster } from '../services/processing';
import { useLocation } from 'react-router-dom';

export const ListMovie = ({ movies, genreList }) => {
  const location = useLocation();

  const genreMovie = genre_ids => {
    if (genre_ids.length === 0) {
      return;
    }
    const arrayGenreName = genre_ids
      .filter(genre_id => genreList[genre_id] !== undefined)
      .map(genre_id => genreList[genre_id])
      .join(', ');
    return arrayGenreName;
  };

  return movies.map(
    ({
      id,
      poster_path,
      title,
      name,
      vote_average,
      release_date,
      first_air_date,
      genre_ids,
    }) => (
      <Card
        key={id}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.2 }}
      >
        <CardLink
          to={location.pathname === '/' ? `movies/${id}` : `${id}`}
          state={{ from: location }}
        >
          <ImgCard>
            <Img src={poster(poster_path)} alt={title || name} />
          </ImgCard>
          
          <CardInfo>{vote_average?.toFixed(1)}</CardInfo>
          <CardTitle>{title || name}</CardTitle>
          <CardRepleaseGenre>
            <CardReleaseDate>
            {release_date?.slice(0, 4) || first_air_date?.slice(0, 4)},&nbsp;
            </CardReleaseDate>
            <CardGenre>{genreMovie(genre_ids)}</CardGenre>
          </CardRepleaseGenre>
        </CardLink>
      </Card>
    )
  );
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
