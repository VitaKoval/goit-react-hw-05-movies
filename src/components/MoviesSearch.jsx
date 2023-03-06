import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ListMovie } from './ListMovie';
import { getMovieSearch } from '../services/API';
import { Container } from './ui/AppBar';
import { CardsList } from './ui/Home';
import {
  FormSearch,
  InputSearch,
  LabelSearch,
  Section,
  NotFindTitle,
} from './ui/MoviesSearch';

export const MoviesSearch = () => {
  const [foundMovies, setFoundMovies] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKeywordChange = e => {
    setKeyword(e.target.value);
  };

  const queryParam = searchParams.get('query') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams(keyword !== '' ? { query: keyword } : {});
  };

  useEffect(() => {
    queryParam &&
      getMovieSearch(queryParam, 1).then(({ results }) => {
        setFoundMovies(results);
      });
    
  }, [queryParam]);

  return (
    <>
      <Section>
        <FormSearch onSubmit={handleSubmit}>
          <LabelSearch htmlFor="search">Search</LabelSearch>
          <InputSearch
            id="search"
            type="text"
            placeholder="movie search keyword"
            onChange={handleKeywordChange}
          />
        </FormSearch>
      </Section>
      {
        <Container>
          <CardsList>
            {foundMovies?.length > 0 && (
              <ListMovie movies={foundMovies} />
            )}
            {foundMovies?.length === 0 && (
              <NotFindTitle>
                WE SEARCHED AND SEARCHED, BUT WE DID NOT FIND IT.
              </NotFindTitle>
            )}
          </CardsList>
        </Container>
      }
    </>
  );
};
