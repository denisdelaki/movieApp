import React, { useState } from "react";
function Movies({ movies }) {
    const [isWatched, setIsWatched] = useState(false)
    function toggleWatch() {
        setIsWatched(isWatched=>!isWatched)
    }
    const myMovies = movies.map((movie) => {
        return (
          <div id="movieContainer">
            <div key={movie.imdbID} className="movieCard">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="moviePoster"
              />
              <h5>Type:{movie.Type}</h5>
              <h5>Title: {movie.Title}</h5>
                    <h5>Year:{movie.Year}</h5>
                    <button onClick={toggleWatch} className="watchButton">{isWatched?"Watched":"UnWatched"}</button>
            </div>
          </div>
        );
   })
    return (
        <div>
            
           {myMovies} 
        </div>
    )
}
export default Movies