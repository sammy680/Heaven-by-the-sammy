// AboutUsPage.tsx
import React from "react";
import "./AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <section className="about-us-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>We are committed to delivering quality fashion that inspires.</p>
        </div>
      </section>

      <section className="about-us-content">
        <div className="content-section">
          <h2>Our Story</h2>
          <p>
            Heaven by The Sammy's was born from a passion for combining style
            and comfort. Our goal is to create luxury fashion that speaks to
            every individual's personality and confidence.
          </p>
        </div>

        <div className="content-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to bring you high-quality clothing that reflects your
            unique style. We believe that fashion should empower and inspire,
            and we strive to make each piece something you'll love to wear.
          </p>
        </div>

        <div className="content-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where every person can express themselves
            through fashion without compromise. We aim to become a brand that
            customers trust and feel connected to.
          </p>
        </div>
      </section>

      <section className="about-us-footer">
        <p>&copy; 2025 Heaven by The Sammy's. All Rights Reserved.</p>
      </section>
    </div>
  );
};

export default AboutUsPage;
