import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";



const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-page p-6">
      <h1 className="text-3xl font-bold mb-4">Your Wishlist</h1>

      {/* Display wishlist items */}
      {wishlist.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-lg mb-4">Your wishlist is empty 💔</p>
          <Link to="/" className="text-white bg-black px-4 py-2 rounded">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="wishlist-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="product-card border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={product.imageSrc}
                alt={product.title}
                className="w-full h-48 object-cover mb-2 rounded-md"
              />
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-lg font-semibold">{product.price}</p>
              {/* Remove from Wishlist button */}
              <button
                onClick={() => {
                  removeFromWishlist(product.id);
                  toast.success(`${product.title} removed from wishlist`);
                }}
                className="bg-red-500 text-white py-2 px-4 rounded mt-2 w-full"
              >
                Remove from Wishlist
              </button>
              {/* Link to product page */}
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
