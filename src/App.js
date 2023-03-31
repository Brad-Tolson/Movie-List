import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  const addMovie = (movie) => {
    const newList = [...watchList, movie];
    setWatchList(newList);
  };

  const removeMovie = (movie) => {
    const newState = watchList.filter((item) => item.id !== movie.id);
    setWatchList(newState);
  };
  

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          movieList={movieList}
          page={page}
          setPage={setPage}
          watchList={watchList}
          setWatchList={setWatchList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <Watchlist watchList={watchList} setWatchList={setWatchList} />
      </main>
    </div>
  );
}

export default App;
