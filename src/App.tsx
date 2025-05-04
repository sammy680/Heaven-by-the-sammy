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
import AuthPage from "./pages/AuthPage";
import { AuthProvider } from "./context/AuthContext";
import ProfileEditPage from "./pages/ProfileEditPage";
import ProtectedRoute from "./components/ProtectedRoute";
import OrdersPage from "./pages/OrderPage";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <ScrollToTop />
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={<LoginSignupPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/order-success" element={<OrderSuccessPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/productPage" element={<ProductPage />} />
                <Route path="/my-order" element={<MyOrdersPage />} />

                {/* Protected Routes */}
                <Route
                  path="/wishlist"
                  element={
                    <ProtectedRoute>
                      <WishlistPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <CartPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <CheckoutPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <UserProfilePage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile/edit"
                  element={
                    <ProtectedRoute>
                      <ProfileEditPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <ProtectedRoute>
                      <OrdersPage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Toaster position="top-right" />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
