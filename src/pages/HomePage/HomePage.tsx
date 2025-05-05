// HomePage.tsx
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import CollectionBanner from "../../components/CollectionBanner/CollectionBanner";
import FeatureProduct from "../../components/FeatureProduct/FeatureProduct";
import Testimonials from "../../components/Testimonials/Testimonials";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/HomePage.css";

const HomePage = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="home-page">
      <div data-aos="fade-up">
        <HeroSection />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <CollectionBanner />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <FeatureProduct />
      </div>

      <div data-aos="fade-up" data-aos-delay="600">
        <Testimonials />
      </div>

      <div data-aos="fade-up" data-aos-delay="800">
        <Newsletter />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
