// src/pages/HomePage.tsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/HeroSection";
import FeatureProduct from "../components/FeatureProduct";
import CollectionBanner from "../components/CollectionBanner";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Lottie from "lottie-react";
// import animationData from '../assets/animations/yourAnimation.json'; // Add your Lottie JSON here

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section with background image */}
      <section data-aos="fade-up">
        <HeroSection heading={""} subheading={""} ctaText={""} ctaLink={""} backgroundImage={""} />
      </section>

      {/* Featured Products */}
      <section data-aos="fade-up">
        <FeatureProduct products={[]} />
      </section>

      {/* Collection Banner with image placeholder */}
      <section data-aos="fade-up">
        <CollectionBanner title={""} imageUrl={""} />
      </section>

      {/* Lottie Animation Placeholder */}
      <section className="my-10" data-aos="zoom-in">
        <div className="w-full max-w-xl mx-auto">
          {/* Add your Lottie animation JSON path below */}
          {/* <Lottie animationData={animationData} loop={true} /> */}
          <div className="text-center text-gray-500">
            Lottie Animation Placeholder
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section data-aos="fade-up">
        <Testimonials />
      </section>

      {/* Newsletter Subscription */}
      <section data-aos="fade-up">
        <Newsletter />
      </section>
    </div>
  );
};

export default HomePage;
