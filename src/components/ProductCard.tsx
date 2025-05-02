// src/components/ProductCard.tsx
import React from "react";
import { Product } from "../types"; // Assuming you have a type for product

interface ProductCardProps {
  product: Product;
  addToWishlist: () => void; // Wishlist handler function
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToWishlist,
}) => {
  return (
    <div className="product-card p-6 border rounded-md shadow-md">
      <img
        src={product.imageSrc}
        alt={product.title}
        className="w-full max-w-md mb-4"
      />
      <h1 className="text-3xl font-semibold">{product.title}</h1>
      <p className="text-xl text-gray-700">{product.price}</p>
      <div
        className="description text-gray-600 mb-4"
        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
      />
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
