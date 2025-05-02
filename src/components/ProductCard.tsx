// src/components/ProductCard.tsx
import React from "react";
import { Product } from "../types"; // Correctly import the Product type

interface ProductCardProps {
  product: Product; // Use the Product type for props
  addToWishlist: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToWishlist,
}) => {
  return (
    <div className="product-card p-6">
      {/* Product Image */}
      <img
        src={product.imageSrc}
        alt={product.title}
        className="w-full max-w-md mb-4"
      />

      {/* Product Details */}
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-xl text-gray-700 mb-4">{product.price}</p>
      <div
        className="text-gray-600 mb-4"
        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
      />

      {/* Add to Wishlist Button */}
      <button
        onClick={addToWishlist}
        className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
      >
        ❤️ Add to Wishlist
      </button>
    </div>
  );
};

export default ProductCard;
