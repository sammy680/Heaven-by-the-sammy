// ProductDetailPage.tsx
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { WishlistContext } from "../contexts/WishlistContext";
import { ProductData } from "../data/ProductData";
import "../styles/ProductDetailPage.css";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = ProductData.find((p) => p.id === id);
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isWishlisted } = useContext(WishlistContext);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleWishlist = () => {
    toggleWishlist(product.id);
  };

  return (
    <section className="product-detail" data-aos="fade-up">
      <div className="product-detail__container">
        <div className="product-detail__image">
          <img
            src={product.image || "your-product-placeholder.jpg"}
            alt={product.name}
            loading="lazy"
          />
        </div>

        <div className="product-detail__info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">₹{product.price}</p>
          <p className="product-description">{product.description}</p>

          <div className="product-actions">
            <label>
              Quantity:
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </label>

            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>

            <button
              className={`btn ${
                isWishlisted(product.id) ? "btn-outline" : "btn-secondary"
              }`}
              onClick={handleWishlist}
            >
              {isWishlisted(product.id)
                ? "Remove from Wishlist"
                : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
