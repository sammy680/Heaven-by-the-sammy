import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-page p-6">
      <h1 className="text-3xl font-bold mb-4">Your Wishlist</h1>

      {/* Display wishlist items */}
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div>
          {wishlist.map((product) => (
            <div key={product.id} className="product-card mb-4 border p-4">
              <img
                src={product.imageSrc}
                alt={product.title}
                className="w-24 h-24 mb-2"
              />
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p>{product.price}</p>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="bg-red-500 text-white py-2 px-4 rounded mt-2"
              >
                Remove from Wishlist
              </button>
              <Link
                to={`/product/${product.id}`}
                className="text-blue-500 mt-2 inline-block"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
