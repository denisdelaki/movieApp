import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import About from "./About";
import Search from "./Search";
function Home() {
    const [movies, setMovies] = useState([])
    const [searchMovie, setSearch] = useState("")
    
    useEffect(() => {
        fetch("http://www.omdbapi.com/?s=$red&apikey=30d6f0cb")
          .then((res) => res.json())
          .then((data) => setMovies(data.Search));
    }, [searchMovie])
  return (
    <div>
      <NavBar />
          <Search searchMovie={searchMovie} setSearch={setSearch}/>
      <MovieList movies={movies} />
      <About />
    </div>
  );
}
export default Home;
