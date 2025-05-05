// src/components/FeatureProduct.tsx
import React from "react";
import { Link } from "react-router-dom";

const FeatureProduct: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Product 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img
                src="/images/product-placeholder.jpg" // TODO: Replace this with actual product image URL
                alt="Product 1"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              {/* Product Badge (optional) */}
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs py-1 px-3 rounded-full">
                New
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 mb-4">Product description goes here.</p>
            <Link
              to="/product-detail"
              className="inline-block bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
            >
              View Details
            </Link>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img
                src="/images/product-placeholder.jpg" // TODO: Replace this with actual product image URL
                alt="Product 2"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 mb-4">Product description goes here.</p>
            <Link
              to="/product-detail"
              className="inline-block bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
            >
              View Details
            </Link>
          </div>

          {/* Product 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img
                src="/images/product-placeholder.jpg" // TODO: Replace this with actual product image URL
                alt="Product 3"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 mb-4">Product description goes here.</p>
            <Link
              to="/product-detail"
              className="inline-block bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
