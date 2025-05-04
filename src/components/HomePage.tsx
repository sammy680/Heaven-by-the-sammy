// src/components/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Unleash Your Aura in Style
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Discover luxury fashion curated for Gen-Z & Millennials.
        </p>
        <Link
          to="/products"
          className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Features or Promo Section (Placeholder) */}
      <section className="py-16 px-4 grid gap-8 md:grid-cols-3 text-center">
        <div className="shadow-md rounded-xl p-6 bg-white">
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-gray-500 text-sm">On orders over ₹999</p>
        </div>
        <div className="shadow-md rounded-xl p-6 bg-white">
          <h3 className="text-xl font-semibold mb-2">Luxury Fabrics</h3>
          <p className="text-gray-500 text-sm">Feel the premium quality</p>
        </div>
        <div className="shadow-md rounded-xl p-6 bg-white">
          <h3 className="text-xl font-semibold mb-2">Hassle-Free Returns</h3>
          <p className="text-gray-500 text-sm">Easy 7-day return policy</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
