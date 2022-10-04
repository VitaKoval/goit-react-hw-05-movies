import {useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieSearch } from '../../services/API';
import {
  FormSearch,
  InputSearch,
  LabelSearch,
  Section,
} from '../ui/MoviesSearch';

export const MoviesSearch = () => {
  const location = useLocation();
  const [foundMovies, setFoundMovies] = useState(null);
    // const [keyword, setKeyword] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

  const handleKeywordChange = e => {
    setSearchParams(e.target.value !== '' ? {query: e.target.value }: {});
  };
    
    const queryParam = searchParams.get('query') ?? '';
    // console.log(queryParam);

  const handleSubmit = evt => {
    evt.preventDefault();

   queryParam && getMovieSearch(queryParam, 1).then(({ results }) => {
      setFoundMovies(results);
   });
  };
 const posterPath = poster_path => {
    return 'https://image.tmdb.org/t/p/w500/' + poster_path;
  };

  console.log(foundMovies);
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
        <ul>
          {foundMovies &&
            foundMovies.map(({ id, poster_path, title, name, vote_average  }) => (<li key={id}>
              <Link to={`${id}`}  state={{ from: location }} >
                <img src={posterPath(poster_path)} alt={title||name} width="250" />
            <h3>{title||name}</h3>
            <p>{vote_average}</p>
              </Link>
              </li>
            ))}
        </ul>
      }
    </>
  );
};
