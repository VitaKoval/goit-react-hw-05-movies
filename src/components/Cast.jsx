import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieIDCredits } from '../services/API';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieIDCredits(movieId).then(({ data }) => setCast(data.cast));
  }, [movieId]);
  // console.log(cast);

  const posterPath = profile_path => {
    return 'https://image.tmdb.org/t/p/w500/' + profile_path;
  };

  return (
    <div>
      <ul>
        {cast.length > 0 &&
          cast.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              <p>{name}</p>
              <img src={posterPath(profile_path)} alt={character} width="100" />
              <p>character: {character}</p>
            </li>
          ))}
      </ul>
      {cast.length === 0 && (
        <div>Oops, we don't have information on this movie.</div>
      )}
    </div>
  );
};
