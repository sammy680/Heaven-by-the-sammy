// src/components/ProductCard.tsx
import React from "react";
import { useWishlist } from "../context/WishlistContext";

interface Product {
  id: string;
  title: string;
  descriptionHtml: string;
  price: string;
  imageSrc: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const toggleWishlist = () => {
    isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product);
  };

  return (
    <div className="product-card p-4 border rounded-lg shadow-md">
      <img
        src={product.imageSrc}
        alt={product.title}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-lg font-semibold">${product.price}</p>

      <button
        onClick={toggleWishlist}
        className={`${
          isInWishlist ? "bg-red-500" : "bg-blue-600"
        } text-white py-2 px-4 rounded mt-2 w-full`}
      >
        {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default ProductCard;
