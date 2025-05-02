// src/App.tsx
import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import WishlistPage from "./pages/WishlistPage"; // Ensure this page is created for wishlist
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { BrowserRouter } from "react-router-dom";


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Toaster position="top-right" reverseOrder={false} />
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />{" "}
        <Route path="/cart" element={<CartPage />} />
        {/* Wishlist route */}
      </Routes>
    </Router>
  );
};

export default App;
