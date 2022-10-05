import { useState, useEffect } from 'react';
import { getTrendingMedia } from '../services/API';
import { CardsList } from '../components/ui/Home';
import { Container } from './ui/AppBar';
import { ListMovie } from './ListMovie';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber] = useState(1);

  useEffect(() => {
    getTrendingMedia(pageNumber).then(data => setMovies(data.results));
  }, [pageNumber]);

  // console.log(movies);

  return (
    <Container>
      <CardsList>
        <ListMovie movies={movies} />
      </CardsList>
    </Container>
  );
};
