// src/App.tsx
import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import WishlistPage from "./pages/WishlistPage"; // Ensure this page is created for wishlist
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />{" "}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* ⬅️ Add this */}
        {/* Wishlist route */}
      </Routes>
    </Router>
  );
};

export default App;
