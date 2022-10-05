import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMedia } from '../services/API';
import { CardsList, Card, CardLink, ImgCard, CardTitle, CardInfo } from "../components/ui/Home";
import { Container } from './ui/AppBar';

export const Home = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getTrendingMedia(pageNumber).then(data => setMovies(data.results));
  }, [pageNumber]);
    
  // console.log(movies);

  const posterPath = poster_path => {
    return 'https://image.tmdb.org/t/p/w500/' + poster_path;
  };

  return (
    <Container>
      <CardsList>
        {movies.map(({ poster_path, title, name, id, vote_average }) => (
          <Card key={id}>
            <CardLink to={`movies/${id}`} state={{ from: location }}>
            <ImgCard src={posterPath(poster_path)} alt={title||name} />
            <CardTitle>{title||name}</CardTitle>
            <CardInfo>{vote_average.toFixed(1)}</CardInfo>
          </CardLink></Card>
        ))}
      </CardsList>
    </Container>
   
  );
};
