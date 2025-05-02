import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"; // 👈 your homepage component
import ProductPage from "./pages/ProductPage"; // 👈 the one with reviews
import TawkToWidget from "./components/TawkToWidget";
const App: React.FC = () => {
  return (
    <Router>
      <TawkToWidget /> {/* ✅ Live chat injected here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
