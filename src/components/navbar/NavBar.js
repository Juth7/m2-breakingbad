import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      {/*Aca definiremos nuestros diferentes links*/}
      <Link to='/'>Home</Link>
      <Link to='/characters'>Characters</Link>
      <Link to='/episodes'>Episodes</Link>
      <Link to='/deaths'>Deaths</Link>
    </div>
  );
}

export default NavBar;
