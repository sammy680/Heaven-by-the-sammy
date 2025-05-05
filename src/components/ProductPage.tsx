// src/components/ProductPage.tsx
import React from "react";
import ProductCard from "./ProductCard";
import { ProductData } from "../data/ProductData";

const ProductPage: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      {/* Page Heading / Banner */}
      <div className="text-center mb-12" data-aos="fade-down">
        {/* Optional Banner Image Placeholder */}
        {/* <img src="/path/to/banner.jpg" alt="Banner" className="mx-auto mb-4 rounded-md" /> */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Explore Our Latest Products
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Browse the newest arrivals curated for you.
        </p>
      </div>

      {/* Products Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
      >
        {ProductData.map((product: unknown) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
