import { Box } from "@material-ui/core";
import MovieCard from "./MovieCard";

const MovieList = ({ list }) => {
  return (
    <div>
      {list.length ? (
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          {list.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Box>
      ) : (
        <p>No Movies Found</p>
      )}
    </div>
  );
};

export default MovieList;
