import { useState, useEffect } from 'react';
import { getMovieGenre, getTrendingMedia } from '../services/API';
import { CardsList } from '../components/ui/Home';
import { Container } from './ui/AppBar';
import { ListMovie } from './ListMovie';


export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber] = useState(1);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    // запит за рошифровкою по кодам жанрів і запис у genreList відповіді у формі обʼєкту (де ключ - це код, значення - це назва жанру)
    getMovieGenre().then(data => {
      const genresArray = data.genres.reduce((acc, { name, id }) => ({ ...acc, [id]: name }));
      return setGenreList(genresArray);
    });
  }, []);

  useEffect(() => {
    getTrendingMedia(pageNumber).then(data => setMovies(data.results));
  }, [pageNumber]);

  

  return (
    <Container>
      <CardsList>
        <ListMovie movies={movies} genreList={genreList}/>
      </CardsList>
    </Container>
  );
};
