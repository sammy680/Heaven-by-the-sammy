import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

import "../styles/ProductPage.css";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-page container" data-aos="fade-up">
      <div className="product-page-wrapper">
        <div className="product-image-section">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="product-image"
          />
        </div>

        <div className="product-info-section">
          <h1 className="product-title">{product.title}</h1>

          <div className="product-rating">
            <span className="stars">
              {"⭐".repeat(Math.floor(product.rating))}
            </span>
            <span className="review-count">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="product-price">
            <span className="current-price">${product.price}</span>
            {product.compareAtPrice && (
              <span className="original-price">${product.compareAtPrice}</span>
            )}
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-actions">
            <button className="btn primary" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button
              className="btn secondary"
              onClick={() => addToWishlist(product)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
