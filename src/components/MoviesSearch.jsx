import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieSearch } from '../services/API';
import { Container } from './ui/AppBar';
import { CardsList, Card, ImgCard, CardLink, CardTitle, CardInfo } from './ui/Home';
import {
  FormSearch,
  InputSearch,
  LabelSearch,
  Section,
} from './ui/MoviesSearch';

export const MoviesSearch = () => {
  const location = useLocation();
  const [foundMovies, setFoundMovies] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKeywordChange = e => {
    setKeyword(e.target.value);
    // setSearchParams(e.target.value !== '' ? { query: e.target.value } : {});
  };

  const queryParam = searchParams.get('query') ?? '';
  console.log(queryParam);

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams(keyword !== '' ? {query: keyword} : {} )
  };

  useEffect(() => {
    queryParam &&
      getMovieSearch(queryParam, 1).then(({ results })=>{setFoundMovies(results)})
  }, [queryParam])

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
          {foundMovies &&
            foundMovies.map(
              ({ id, poster_path, title, name, vote_average }) => (
                <Card key={id}>
                  <CardLink to={`${id}`} state={{ from: location }}>
                    <ImgCard src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title || name}/>
                    <CardTitle>{title || name}</CardTitle>
                    <CardInfo>{vote_average}</CardInfo>
                  </CardLink>
                </Card>
              )
            )}
          {foundMovies === [] && (
            <div>
              <div>МИ ШУКАЛИ-ШУКАЛИ, АЛЕ НЕ ЗНАЙШЛИ.</div>Спробуйте змінити
              запит, або виберіть щось цікаве з наших добірок
            </div>
          )}
          </CardsList>
          </Container>
      }
    </>
  );
};
