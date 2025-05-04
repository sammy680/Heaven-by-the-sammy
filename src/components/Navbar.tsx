// src/components/Navbar.tsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar: React.FC = () => {
  const location = useLocation();
  const { cart } = useCart(); // Fixed: using correct property
  const { wishlist } = useWishlist();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/Logo-black.png"
            alt="Heaven by The Sammy's"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm md:text-base font-medium">
          <li>
            <Link
              to="/"
              className={`hover:text-pink-600 transition ${
                isActive("/") ? "text-pink-600" : "text-gray-800"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`hover:text-pink-600 transition ${
                isActive("/products") ? "text-pink-600" : "text-gray-800"
              }`}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-pink-600 transition ${
                isActive("/about") ? "text-pink-600" : "text-gray-800"
              }`}
            >
              About
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/wishlist" className="relative">
            <span className="material-icons text-gray-700 hover:text-pink-600 transition">
              favorite
            </span>
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative">
            <span className="material-icons text-gray-700 hover:text-pink-600 transition">
              shopping_cart
            </span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </Link>

          <Link to="/profile">
            <span className="material-icons text-gray-700 hover:text-pink-600 transition">
              person
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
