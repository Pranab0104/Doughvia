import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Doughvia</h1>

          <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        <ul className={`navLinks ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="/menu" onClick={() => setMenuOpen(false)}>
              Menu
            </Link>
          </li>

          <li>
            <Link to="/celebrate" onClick={() => setMenuOpen(false)}>
              Celebrate
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>

          <button>Order Now</button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
