import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Navbar from "./components/Navbar";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScroolToTop";
import OrderSuccessPage from "./pages/OrderSuccessPages";
import LoginSignupPage from "./pages/LoginSignupPage";
import UserProfilePage from "./pages/UserProfilePage";
import MyOrdersPage from "./pages/MyOrderPage";
const App: React.FC = () => {
  return (
    <WishlistProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Routes>
              <Route path="/orders" element={<MyOrdersPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
              <Route path="/auth" element={<LoginSignupPage />} />
              <Route path="/order-success" element={<OrderSuccessPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          <Toaster position="top-right" />
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
};

export default App;
