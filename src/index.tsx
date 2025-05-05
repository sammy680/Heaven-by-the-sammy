import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Global Tailwind & custom styles
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./pages/ScroolToTop";// Scroll on route change

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
