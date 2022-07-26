import React, { useEffect, useState } from "react";
import "../App.css";
function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isWatched, setWatched] = useState("Unwatched");
  const [isAdd, setAdd] = useState("Add Favorites");
  useEffect(() => {
    fetch("http://www.omdbapi.com/?s=blood&apikey=30d6f0cb")
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, []);
  function toggleWatch() {
    setWatched((isWatched) => !isWatched);
  }
  function addFavorites() {
    setAdd((isAdd) => !isAdd);
  }
  return (
    <div
      id="cardContainer"
      style={{
        display: "block",
      }}
    >
      <div id="movieContainer">
        {movies.map((movie) => (
          <div key={movie.id} className="movieCard">
            <img className="moviePoster" src={movie.Poster} alt={movie.Title} />
            <h3>Movie Description</h3>
            <h5 className="movieTitle">Title: {movie.Title}</h5>
            <h5>Type: {movie.Type}</h5>
            <h5>Year: {movie.Year}</h5>
            <span>
              <button
                style={{
                  marginLeft: "0rem",
                  color: "red",
                  background: "black",
                  border: "none",
                  fontSize: "1.1rem",
                  width: "8rem",
                  height: "3rem",
                  cursor: "progress",
                  borderRadius: "1.5rem",
                }}
                onClick={addFavorites}
              >
                {isAdd ? "Add Favorites" : "Added"}
              </button>
              <button
                onClick={toggleWatch}
                style={{
                  marginLeft: "0.5rem",
                  color: "red",
                  background: "black",
                  border: "none",
                  fontSize: "1.2rem",
                  width: "8rem",
                  height: "3rem",
                  cursor: "progress",
                  borderRadius: "1.5rem",
                }}
              >
                {isWatched ? "UnWatched" : "Watched"}
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MovieList;
