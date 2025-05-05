import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import your global styles
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // If you're using React Router for routing
import { AuthProvider } from "./contexts/AuthContext"; // Assuming you have an AuthContext
import { CartProvider } from "./contexts/CartContext"; // Assuming you have a CartContext
import { WishlistProvider } from "./contexts/WishlistContext"; // Assuming you have a WishlistContext
import { FirebaseProvider } from "./contexts/FirebaseContext"; // If you have Firebase integration

// Render your app
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Wrapping your app with necessary context providers */}
    <FirebaseProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <App />
            </Router>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
