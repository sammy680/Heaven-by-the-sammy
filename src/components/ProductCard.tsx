// src/components/ProductCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../types";
import ProductData from "../data/ProductData"; // if default export

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
      data-aos="zoom-in"
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Product Image */}
        <div className="w-full h-60 md:h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src={product.image} // Replace with actual image path or use Shopify image CDN
            alt={product.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
          <p className="text-gray-600 mb-2">{product.category || "Category"}</p>
          <p className="text-black font-bold text-xl">${product.price}</p>
        </div>

        {/* Add to Cart Button */}
        <div className="px-4 pb-4">
          <button className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
