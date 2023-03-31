import React from "react";

function MovieCard({ movie, watchList, setWatchList }) {
  const handleAddMovie = () => {
    setWatchList((prevList) => [...prevList, movie]);
  };

  const handleRemoveMovie = () => {
    setWatchList((prevList) => prevList.filter((mov) => mov.id !== movie.id));
  };

  const inWatchlist = watchList.some((mov) => {
    return mov.id === movie.id;
  });

  const button = inWatchlist ? (
    <button onClick={handleRemoveMovie}>Remove from Watchlist</button>
  ) : (
    <button onClick={handleAddMovie} disabled={inWatchlist}>
      {inWatchlist ? "Added to Watchlist" : "Add to Watchlist"}
    </button>
  );

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} Poster`}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
      </div>
      {button}
    </div>
  );
}

export default MovieCard;
