import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 text-sm line-clamp-2 mb-2">
        {product.description || "No description available."}
      </p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-lg font-bold">₹{product.price}</span>
        <div className="flex gap-3">
          <button
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            onClick={handleWishlistToggle}
          >
            <Heart
              className={`w-5 h-5 ${
                isInWishlist ? "text-red-500 fill-red-500" : "text-gray-500"
              }`}
            />
          </button>
          <button
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
