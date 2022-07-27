import React from "react";
 import "../App.css";
import {NavLink} from "react-router-dom"
function NavBar() {
  

  return (
    <nav>
          <NavLink exact to="/" >Home</NavLink>
          <NavLink to="/moviequotes">MovieQuotes</NavLink>
          <NavLink to="/about">About</NavLink>
     
    </nav>
  );
}

export default NavBar;
