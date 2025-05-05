// Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar" data-aos="fade-down">
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src="/images/logo.png" alt="The Sammy's" />
        </Link>

        {/* Desktop Nav */}
        <nav className={`navbar__menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/shop" onClick={toggleMenu}>
            Shop
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="navbar__icons">
          <Link to="/wishlist" className="icon-link">
            <FaHeart />
          </Link>
          <Link to="/cart" className="icon-link">
            <FaShoppingCart />
          </Link>
          <Link to="/auth" className="icon-link">
            <FaUser />
          </Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
