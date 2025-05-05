import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import "./WishlistPage.css";

const WishlistPage = () => {
  const { currentUser } = useAuth();
  const { wishlist, removeFromWishlist } = useWishlist();
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [currentUser, history]);

  const handleRemove = (productId: string) => {
    setLoading(true);
    try {
      removeFromWishlist(productId);
    } catch (error) {
      console.error("Failed to remove item from wishlist:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      {loading && <p>Loading...</p>}
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty!</p>
      ) : (
        <div className="product-list">
          {wishlist.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard product={product} />
              <button
                className="remove-btn"
                onClick={() => handleRemove(product.id)}
                disabled={loading}
              >
                {loading ? "Removing..." : "Remove from Wishlist"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
