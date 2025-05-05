// src/components/Newsletter.tsx
import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white" data-aos="fade-up">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg mb-8">
          Stay updated with the latest trends and offers!
        </p>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 flex flex-col md:flex-row bg-white p-4 rounded-lg shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-black text-white px-6 py-4 rounded-r-lg hover:bg-gray-800 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
