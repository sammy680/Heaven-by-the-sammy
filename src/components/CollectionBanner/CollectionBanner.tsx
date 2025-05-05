import React from "react";
import "./CollectionBanner.css"; // Optional: if you want to move styles to CSS
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const CollectionBanner: React.FC = () => {
  return (
    <section className="collection-banner" data-aos="fade-up">
      {/* Background Image Placeholder */}
      <div
        className="banner-background"
        style={{
          backgroundImage: "url('/images/collection-banner.jpg')", // Replace with your actual image
        }}
      >
        <div className="banner-overlay">
          <div className="banner-content">
            <h2 className="banner-title">Curated Collections</h2>
            <p className="banner-subtitle">
              Discover handpicked styles designed to elevate your fashion game.
            </p>
            <button className="banner-button">Explore Collection</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionBanner;
