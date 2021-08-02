import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesFromApi } from "../store/movie-slice";
import MovieList from "./MoviesList";

const Movies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesFromApi());
  }, [dispatch]);

  const moviesList = useSelector((state) => state.movie.data);
  return <MovieList list={moviesList} />;
};

export default Movies;
