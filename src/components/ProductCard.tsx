// src/components/ProductCard.tsx
import React from "react";
import { Product } from "../types";
import { useWishlist } from "../context/WishlistContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

  const isProductInWishlist = wishlist.some((item) => item.id === product.id);

  const handleWishlistToggle = () => {
    if (isProductInWishlist) {
      removeFromWishlist(product.id); // Remove product from wishlist
    } else {
      addToWishlist(product); // Add product to wishlist
    }
  };

  return (
    <div className="product-card p-4 border rounded-lg shadow-md">
      <img
        src={product.imageSrc}
        alt={product.title}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-lg font-semibold">{product.price}</p>

      {/* Wishlist button */}
      <button
        onClick={handleWishlistToggle}
        className={`${
          isProductInWishlist ? "bg-red-500" : "bg-gray-500"
        } text-white py-2 px-4 rounded mt-2 w-full`}
      >
        {isProductInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default ProductCard;
