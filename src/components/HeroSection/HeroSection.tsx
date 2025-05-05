import React from "react";
import "./HeroSection.css"; // Separate CSS file for styling
import { Link } from "react-router-dom";
import heroAnimation from "../..assets/animation/hero.json"; // Optional Lottie animation
import Lottie from "lottie-react";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" data-aos="fade-up">
      <div className="hero-container">
        {/* Left Text Section */}
        <div className="hero-text">
          <h1 className="hero-title">
            Unleash Your <span>Aura</span> in Style
          </h1>
          <p className="hero-subtitle">
            Discover fashion that defines you. Bold. Elegant. Timeless.
          </p>
          <Link to="/collections" className="hero-btn">
            Explore Collection
          </Link>
        </div>

        {/* Right Image or Animation */}
        <div className="hero-animation">
          <Lottie animationData={heroAnimation} loop={true} />
          {/* Alternative: <img src="HERO_IMAGE_PLACEHOLDER" alt="Fashion Banner" className="hero-img" /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
