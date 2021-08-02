import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesFromApi } from "../store/movie-slice";

const Movies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Movies page");
    dispatch(fetchMoviesFromApi());
  }, [dispatch]);

  const moviesList = useSelector((state) => state.movie);
  console.log(moviesList);
  return <div>{moviesList}</div>;
};

export default Movies;
