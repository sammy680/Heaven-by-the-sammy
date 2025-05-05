import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Ensure this is the updated version of App.css

// Importing pages
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import LoginSignupPage from "./pages/LoginSignupPage/LoginSignupPage";
import MyOrderPage from "./pages/MyOrderPage/MyOrderPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import OrderSuccessPage from "./pages/OrderSuccessPages/OrderSuccessPages";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";

// Importing Components
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./pages/ScrollToTop";
import TawkToWidget from "./pages/TawkToWidget";

// Importing context providers

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { useCart } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import {useHistory} from "react-router-dom";
const history = useHistory();
history.push("/some-path");

// Optional: Import Analytics/Tracking/Other services here

const App: React.FC = () => {
  useEffect(() => {
    // Any global setup can go here
    console.log("App is loaded");
  }, []);
  const navigate = useNavigate();

  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <ScrollToTop />
            <div className="app-container">
              <Navbar />
              <main>
                <Routes>
                  {/* Define Routes for Pages */}
                  <Route path="/" Component={HomePage} />
                  <Route path="/about-us" Component={AboutUsPage} />
                  <Route path="/auth" Component={AuthPage} />
                  <Route path="/checkout" Component={CheckoutPage} />
                  <Route path="/login-signup" Component={LoginSignupPage} />
                  <Route path="/my-orders" Component={MyOrderPage} />
                  <Route path="/order/:id" Component={OrderPage} />
                  <Route path="/order-success" Component={OrderSuccessPage} />
                  <Route path="/product/:id" Component={ProductDetailPage} />
                  <Route path="/profile-edit" Component={ProfileEditPage} />
                  <Route path="/wishlist" Component={WishlistPage} />
                  <Route path="/user-profile" Component={UserProfilePage} />
                </Routes>
              </main>
              <Footer />
            </div>
            <TawkToWidget />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
