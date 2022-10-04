import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '3c5b3b958c2c49b1be12e504b8132004',
};

export async function getTrendingMedia(pageNamber) {
  try {
    const { data } = await axios.get(`trending/all/week`, {
      params: {
        page: pageNamber,
      },
    });
    return data;
  } catch (error) {
    console.log(error.massege);
  }
}

export async function getFilmById(movie_id) {
  try {
    const { data } = await axios.get(`/movie/${movie_id}`);
    return data;
  } catch (error) {
    console.log(error.massege);
  }
}

export async function getMovieSearch(query, pageNamber) {
  try {
    const data = await axios.get('search/movie', {
      params: {
        page: pageNamber,
        include_adult: false,
        query,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error.massege);
  }
}

export async function getMovieIDCredits(movie_id) {
    try {
        const data = await axios.get(`/movie/${movie_id}/credits`);
        return data;
    } catch (error) {
        console.log(error.massege);
    }
}

export async function getMovieIdReviews(movie_id) {
    try {
        const data = await axios.get(`/movie/${movie_id}/reviews`);
        return data;
    } catch (error) {
        console.log(error.massege);
    }
}
