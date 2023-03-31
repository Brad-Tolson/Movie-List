import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({ watchList, setWatchList }) => {
  const removeMovie = (movie) => {
    const updatedWatchlist = watchList.filter((m) => m.id !== movie.id);
    setWatchList(updatedWatchlist);
  };

  const movieDisplay =
    watchList &&
    watchList.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        watchList={watchList}
        setWatchList={setWatchList}
        removeMovie={removeMovie}
      />
    ));

  return (
    <div className="watchlist">
      <h1>Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
