import axios from "axios";

const apiKey = "f7ad41376be3e50ed1b1d9c38185c26d";

export default {
  getMovies: async (category) => {
    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`;
    const info = await axios.get(url);
    return info.data;
  },
  getSearch: async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;
    const info = await axios.get(url);
    return info.data;
  },
  getMovieById: async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`;
    const info = await axios.get(url);
    return info.data;
  },
  getPopularMovies: async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const info = await axios.get(url);
    return info.data;
  },
};
