import React from "react";
import getGenres from "../../services/utilService";
import MovieCard from "./MovieCard";

const GenreScroll = ({ list }) => {
  const getMovieListByGenre = (genreName) => {
    return list.map((movie) => {
      return movie.genre_ids.map((gID) => {
        const _genreName = getGenres(gID);
        return _genreName === genreName ? (
          <MovieCard key={movie.id} movie={movie} />
        ) : (
          // <p key={movie.id}>{movie.title}</p>
          <></>
        );
      });
    });
  };

  const getMoviesDetails = () => {
    const genreList = ["Action", "Comedy", "Horror"];
    return genreList.map((genreName) => {
      console.log("hello");
      return (
        <div key={genreName}>
          <p style={{ fontSize: 30 }}>{genreName}</p>
          {getMovieListByGenre(genreName)}
        </div>
      );
    });
  };

  const FilteredGenreMovieList = getMoviesDetails();

  return FilteredGenreMovieList;
};

export default React.memo(GenreScroll);
