import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./components/Footer";

// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

// Pages
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/WishlistPage";
import AuthPage from "./pages/AuthPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import OrderPage from "./pages/OrderPage";
import MyOrderPage from "./pages/MyOrderPage";
import OrderSuccessPage from "./pages/OrderSuccessPages";
import UserProfilePage from "./pages/UserProfilePage";
import ProfileEditPage from "./pages/ProfileEditPage";

// Other Utility Components
import ProtectedRoute from "./pages/ProtectedRoute";
import TawkToWidget from "./pages/TawkToWidget";
import ReviewForm from "./pages/ReviewForm";

// Animation support (Lottie ready)
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/login" element={<LoginSignupPage />} />
                <Route path="/orders" element={<OrderPage />} />
                <Route path="/my-orders" element={<MyOrderPage />} />
                <Route path="/order-success" element={<OrderSuccessPage />} />
                <Route path="/profile" element={<UserProfilePage />} />
                <Route path="/profile/edit" element={<ProfileEditPage />} />
                <Route
                  path="/review"
                  element={
                    <ReviewForm
                      productId={""}
                      onSubmit={function (
                        review: string,
                        rating: number
                      ): void {
                        throw new Error("Function not implemented.");
                      }}
                    />
                  }
                />
                <Route
                  path="/products"
                  element={
                    <ProtectedRoute>
                      <ProductPage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
            <TawkToWidget />
          </div>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
function init(arg0: { duration: number; once: boolean; }) {
  throw new Error("Function not implemented.");
}

