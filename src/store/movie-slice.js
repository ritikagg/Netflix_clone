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
    console.log(movieData);
    dispatch(movieActions.updateMovieList(movieData));
  };
};

export const movieActions = movieSlice.actions;

export default movieSlice;
