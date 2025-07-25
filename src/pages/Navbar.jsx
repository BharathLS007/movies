import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <main>
      <nav className="Navbar">
        <div className="logo">
          <span>Movie Now</span>
        </div>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/WatchList">WatchList</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Navbar;
