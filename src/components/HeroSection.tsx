// src/components/HeroSection.tsx
import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection: React.FC = () => {
  return (
    <section
      className="w-full h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/images/hero-bg.jpg')`, // TODO: Replace with your actual background image path
      }}
      data-aos="fade-in"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Unleash Your Aura in Style
        </h1>
        <p className="text-lg md:text-xl mb-6 font-light">
          Discover the essence of luxury fashion for the modern generation.
        </p>
        <Link to="/products">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md shadow-md transition-transform hover:scale-105 hover:bg-gray-200">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
