import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MoviesList";

const Movies = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchMoviesFromApi());
  // }, [dispatch]);

  const moviesList = useSelector((state) => state.movie.data);
  return <MovieList list={moviesList} />;
};

export default Movies;
