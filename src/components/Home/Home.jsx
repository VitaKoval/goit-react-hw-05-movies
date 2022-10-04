import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMedia } from '../../services/API';

export const Home = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getTrendingMedia(pageNumber).then(data => setMovies(data.results));
  }, [pageNumber]);
    
//   console.log(movies);

  const posterPath = poster_path => {
    return 'https://image.tmdb.org/t/p/w500/' + poster_path;
  };

  return (
    <>
      <div>Cписок популярных кинофильмов</div>
      <ul>
        {movies.map(({ poster_path, title, name, id, vote_average }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
            <img src={posterPath(poster_path)} alt={title||name} width="250" />
            <h3>{title||name}</h3>
            <p>{vote_average}</p>
          </Link></li>
        ))}
      </ul>
    </>
  );
};
