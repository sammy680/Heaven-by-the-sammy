import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const location = useLocation();

  const linkClasses = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      location.pathname === path
        ? "bg-white text-black"
        : "hover:bg-white hover:text-black"
    }`;

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <Link
        to="/"
        className="text-2xl font-bold tracking-widest hover:text-gray-300"
      >
        Heaven by The Sammy's
      </Link>

      <div className="flex space-x-3 text-sm">
        <Link to="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link to="/wishlist" className={linkClasses("/wishlist")}>
          Wishlist ({wishlist.length})
        </Link>
        <Link to="/cart" className={linkClasses("/cart")}>
          Cart ({cart.length})
        </Link>
        <Link to="/checkout" className={linkClasses("/checkout")}>
          Checkout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
