// src/components/Navbar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar: React.FC = () => {
  const { cart } = useCart(); // ✅ use cart instead of cartItems
  const { wishlist } = useWishlist();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="images/Logo-black.png" className="text-2xl font-bold text-black tracking-wide">
          Heaven by The Sammy's
        </Link>

        {/* Nav Links */}
        <nav className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-gray-700 hover:text-black transition ${
                location.pathname === link.path ? "font-semibold underline" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex space-x-4 items-center">
          <Link
            to="/wishlist"
            className="relative text-gray-700 hover:text-black"
          >
            🤍
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1.5">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative text-gray-700 hover:text-black">
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 text-xs bg-green-600 text-white rounded-full px-1.5">
                {cart.length}
              </span>
            )}
          </Link>
          <Link to="/profile" className="text-gray-700 hover:text-black">
            👤
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
