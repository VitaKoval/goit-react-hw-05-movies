import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieIDCredits } from '../services/API';
import { poster } from '../services/processing';
import { CastsList, CastCard, CastTitle, CastImg, CastInfo } from './ui/Cast';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieIDCredits(movieId).then(({ data }) => setCast(data.cast));
  }, [movieId]);
  // console.log(cast);

  return (
    <div>
      <CastsList>
        {cast.length > 0 &&
          cast.map(({ id, character, name, profile_path }) => (
            <CastCard key={id}>
              <CastTitle>{name}</CastTitle>
              <CastImg src={poster(profile_path)} alt={character} />
              <CastInfo>character: {character}</CastInfo>
            </CastCard>
          ))}
      </CastsList>
      {cast.length === 0 && (
        <div>Oops, we don't have information on this movie.</div>
      )}
    </div>
  );
};
