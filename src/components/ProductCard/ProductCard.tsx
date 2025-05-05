import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  discountPrice: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  discountPrice,
  rating,
}) => {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-card-link">
        <div className="product-card-image">
          <img src={image} alt={name} />
        </div>
        <div className="product-card-info">
          <h3 className="product-card-title">{name}</h3>
          <div className="product-card-rating">
            <span className="product-card-rating-stars">
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </span>
            <span className="product-card-rating-count">({rating})</span>
          </div>
          <div className="product-card-price">
            <span className="product-card-discount-price">
              ${discountPrice}
            </span>
            <span className="product-card-original-price">${price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
