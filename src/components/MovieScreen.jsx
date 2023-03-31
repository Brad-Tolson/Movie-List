import React from "react";
import MovieCard from "./MovieCard";

function MovieScreen({
  movieList,
  page,
  setPage,
  watchList,
  setWatchList,
  addMovie,
  removeMovie,
}) {
  const decrement = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const increment = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="movie-screen">
      <h2>Popular Movies</h2>
      <div className="movie-list">
        {movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            watchList={watchList}
            setWatchList={setWatchList}
            addMovie={addMovie}
            removeMovie={removeMovie}
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={decrement} disabled={page === 1 && true}>
          Prev Page
        </button>
        <button onClick={increment}>Next Page</button>
      </div>
    </div>
  );
}

export default MovieScreen;
