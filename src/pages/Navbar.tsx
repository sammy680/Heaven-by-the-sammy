import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import "./Navbar.css"; // Optional external CSS for hover/animation effects

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* LOGO */}
        <Link to="/" className="text-xl font-bold tracking-wider text-gray-900">
          {/* Logo Image Placeholder */}
          <img
            src="/path/to/logo.png" // Replace with your actual logo
            alt="Site Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* MENU LINKS */}
        <div className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* ACTION ICONS */}
        <div className="flex items-center space-x-4">
          <Link to="/wishlist" className="hover:text-pink-500">
            <FaHeart size={18} />
          </Link>
          <Link to="/cart" className="hover:text-blue-500">
            <FaShoppingCart size={18} />
          </Link>
          <Link to="/auth" className="hover:text-green-600">
            <FaUser size={18} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
