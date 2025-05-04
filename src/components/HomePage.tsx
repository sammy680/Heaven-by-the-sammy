// src/components/HomePage.tsx

import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScroolToTop";
import ProductCard from "./ProductCard";
import dummyProducts from "../data/ProductData";
import "../App.css"; // You can remove this if you're fully switching to Tailwind

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <img
            src="/Logo-black.png"
            alt="Heaven by The Sammy's"
            className="mx-auto mb-6 w-32 h-auto"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Unleash Your Aura in Style
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Discover the luxury fashion made for the bold, the beautiful, and
            the brave.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-black px-6 py-3 font-semibold rounded hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </header>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {dummyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer or additional sections can go here */}

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
