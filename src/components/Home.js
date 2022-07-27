import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import About from "./About";
import Search from "./Search";
function Home({handleSearch}) {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        fetch("http://www.omdbapi.com/?s=blood&apikey=30d6f0cb")
            .then(res => res.json())
        .then(data=>setMovies(data.Search))
    }, [])
  return (
    <div>
      <NavBar />
      <Search onChange={handleSearch} />
      <MovieList movies={movies} />
      <About />
    </div>
  );
}
export default Home;
