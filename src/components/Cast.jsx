import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieIDCredits } from '../services/API';
import { CastsList, CastCard, CastTitle, CastImg, CastInfo } from "./ui/Cast";

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
      <CastsList>
        {cast.length > 0 &&
          cast.map(({ id, character, name, profile_path }) => (
            <CastCard key={id}>
              <CastTitle>{name}</CastTitle>
              <CastImg src={posterPath(profile_path)} alt={character}/>
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
