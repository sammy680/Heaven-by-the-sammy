import React from "react";
import "./Footer.css"; // Create this CSS file for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <img
            src="/* LOGO_PLACEHOLDER */"
            alt="The Sammy's Logo"
            className="footer-logo"
          />
          <p>Unleash Your Aura in Style with Heaven by The Sammy's.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/collections">Collections</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-links">
          <h4>Customer Care</h4>
          <ul>
            <li>
              <a href="/faq">FAQs</a>
            </li>
            <li>
              <a href="/returns">Return Policy</a>
            </li>
            <li>
              <a href="/shipping">Shipping Info</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="/* INSTAGRAM_LINK */"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="/* FACEBOOK_LINK */"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="/* TIKTOK_LINK */"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Heaven by The Sammy's. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
