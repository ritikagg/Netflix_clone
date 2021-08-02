import MovieCard from "./MovieCard";

const MovieList = ({ list }) => {
  return (
    <div>
      {list.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
