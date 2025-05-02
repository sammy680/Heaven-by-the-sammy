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
  const { id } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const { addToWishlist } = useWishlist(); // Access wishlist context

  // Dummy product data (for now)
  const dummyProduct = {
    id: "123",
    title: "Luxury White Shirt",
    descriptionHtml: "<p>100% Cotton luxury shirt for everyday elegance.</p>",
    price: "$129",
    imageSrc: "/images/products/shirt1.jpg", // Replace with the actual image
  };

  // Handle adding to wishlist
  const handleAddToWishlist = () => {
    addToWishlist(dummyProduct); // Add the current product to wishlist
  };

  return (
    <div className="product-page p-6">
      {/* ProductCard Component that takes product data and wishlist handler */}
      <ProductCard product={dummyProduct} addToWishlist={handleAddToWishlist} />

      {/* Reviews Section */}
      <div className="reviews mt-6">
        <h3 className="text-2xl font-semibold">Product Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to review this product!</p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              className="review-card mb-4 p-4 border rounded-md shadow-md"
            >
              <p>{review.review}</p>
              <p>Rating: {review.rating} Stars</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;
