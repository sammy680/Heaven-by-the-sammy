// src/pages/ProductPage.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard"; // Import the reusable ProductCard component
import { useWishlist } from "../context/WishlistContext";

interface Review {
  productId: string;
  review: string;
  rating: number;
}

const ProductPage = () => {
  const { productId } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const { addToWishlist } = useWishlist();

  // Dummy product data (for now)
  const dummyProduct = {
    id: "123",
    title: "Luxury White Shirt",
    descriptionHtml: "<p>100% Cotton luxury shirt for everyday elegance.</p>",
    price: "$129",
    imageSrc: "/images/products/shirt1.jpg",
  };

  // Handle adding to wishlist
  const handleAddToWishlist = () => {
    addToWishlist(dummyProduct);
  };

  return (
    <div>
      <ProductCard product={dummyProduct} addToWishlist={handleAddToWishlist} />

      {/* Reviews Section */}
      <div className="reviews">
        <h3>Product Reviews</h3>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p>{review.review}</p>
            <p>Rating: {review.rating} Stars</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
