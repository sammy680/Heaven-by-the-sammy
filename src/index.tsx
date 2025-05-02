import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import "./index.css";
import App from "./App";
import { WishlistProvider } from "./context/WishlistContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
); // Create root element
root.render(
  <React.StrictMode>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </React.StrictMode>
);
