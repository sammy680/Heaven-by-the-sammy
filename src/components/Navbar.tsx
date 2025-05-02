// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
    const { cart } = useCart();
    const { wishlist } = useWishlist();

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold">
        Heaven by The Sammy's
      </Link>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist ({wishlist.length})</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
