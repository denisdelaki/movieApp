import React from "react";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import About from "./About";
function Home() {
  return (
    <div>
      <NavBar />
      <MovieList />
      <About />
    </div>
  );
}
export default Home;
