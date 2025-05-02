import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";

interface Review {
  productId: string;
  review: string;
  rating: number;
}

const ProductPage = () => {
  const { productId } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleReviewSubmit = (review: string, rating: number) => {
    const newReview = { productId: productId || "", review, rating };
    setReviews((prev) => [...prev, newReview]);
  };

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
      {/* Display product details here */}

      <ReviewForm productId={productId || ""} onSubmit={handleReviewSubmit} />

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
