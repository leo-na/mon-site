import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Logo from "./Images/LOGO.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="nav-links">
        <Link to="/nouveaux">Nouveaux</Link>
        <Link to="/homme">Homme</Link>
        <Link to="/femme">Femme</Link>
        <Link to="/enfant">Enfant</Link>
        <Link to="/offres">Offres</Link>
      </nav>
      <div className="header-actions">
        <div className="search-bar">
          <input type="text" placeholder="Rechercher..." />
          <FaSearch className="search-icon" />
        </div>
        <button className="icon-button">
          <FaHeart />
        </button>
        <button className="icon-button">
          <FaShoppingCart />
        </button>
      </div>
    </header>
  );
};

export default Header;
