// src/pages/WishlistPage.tsx

import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-page p-6">
      <h1 className="text-3xl font-bold mb-6">💖 Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg mb-4">Your wishlist is empty 💔</p>
          <Link
            to="/"
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="wishlist-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="product-card border p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={product.imageSrc || "/images/default-product.jpg"}
                alt={product.title}
                className="w-full h-52 object-cover mb-3 rounded"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-700 font-medium mb-1">${product.price}</p>

              {/* View Product */}
              <Link
                to={`/product/${product.id}`}
                className="text-blue-600 hover:underline text-sm mb-3 block"
              >
                View Product
              </Link>

              {/* Remove Button */}
              <button
                onClick={() => {
                  removeFromWishlist(product.id);
                  toast.success(`${product.title} removed from wishlist`);
                }}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-all duration-300"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
