import { createSlice } from "@reduxjs/toolkit";
import Api from "../services/moviesService";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
  },
  reducers: {
    updateMovieList(state, action) {
      console.log("updated!!");
      state.data = action.payload;
    },
  },
});

export const fetchMoviesFromApi = () => {
  return async (dispatch) => {
    const fetchMovies = async () => {
      const res = await Api.getPopularMovies();
      return res.results;
    };
    const movieData = await fetchMovies();
    // console.log(movieData);
    dispatch(movieActions.updateMovieList(movieData));
  };
};

export const fetchSearchedData = (searchQuery) => {
  return async (dispatch) => {
    const fetchQuery = async () => {
      // console.log(searchQuery);
      const res = await Api.getSearch(searchQuery);
      return res.results;
    };
    const searchedData = await fetchQuery();
    // console.log(searchedData);
    dispatch(movieActions.updateMovieList(searchedData));
  };
};

export const movieActions = movieSlice.actions;

export default movieSlice;
