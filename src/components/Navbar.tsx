// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">Heaven by The Sammy's</Link>
      </h1>
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link to="/" className="hover:text-pink-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/wishlist" className="hover:text-pink-400">
            Wishlist
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-pink-400">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
