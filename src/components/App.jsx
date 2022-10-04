import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { HomePage } from '../pages/HomePage';
import { MoviePage } from '../pages/MoviePage';
import { MoviesSearch } from '../components/Movies/MoviesSearch';
import { MovieDetails } from '../components/Movies/MovieDetails';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from '../components/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />}>
            <Route index element={<MoviesSearch />} />
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
        <Route path="*">NotFound</Route>
      </Routes>
    </>
  );
};
