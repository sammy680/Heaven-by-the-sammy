// src/components/CollectionBanner.tsx
import React from "react";
import { Link } from "react-router-dom";

const CollectionBanner: React.FC = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        // TODO: Replace this placeholder with your collection banner image URL
        backgroundImage: `url('/images/collection-banner-placeholder.jpg')`,
      }}
      data-aos="zoom-in-up"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Banner Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Discover the New Collection
        </h2>
        <p className="text-lg md:text-xl mb-6 font-light">
          Elevate your style with our exclusive range of fashion essentials.
        </p>
        <Link
          to="/products"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default CollectionBanner;
