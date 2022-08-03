import React from "react";
import { Link } from "react-router-dom";
import  "/home/whitney/Development/code/phase-2/project/src/Components/Navbar.css"
import  "/home/whitney/Development/code/phase-2/project/src/index.css"

const Navbar = () => {
    return (
      <div id="navbar">
          <li id="list">
              <Link id="link" to="/">Home</Link>
          </li>
          <li id="list">
              <Link id="link" to="/recipes">Recipies</Link>
          </li>
          <li id="list">
              <Link id="link" to="/add">addRecipe</Link>
          </li>
          <li id="list">
              <Link id="link" to="/contact">Contact</Link>
          </li>
      </div>
    );
  }
  
  export default Navbar