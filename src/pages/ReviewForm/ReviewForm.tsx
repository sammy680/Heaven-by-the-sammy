// ReviewForm.tsx
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { addReview } from "../services/reviewService"; // Assuming there's a review service

interface ReviewFormProps {
  productId: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ productId }) => {
  const { user } = useAuth();
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!rating || !comment) {
      setError("Please provide a rating and comment.");
      return;
    }

    setIsSubmitting(true);
    try {
      await addReview(productId, { userId: user?.uid, rating, comment });
      setSuccess(true);
      setRating(0);
      setComment("");
      setError(null);
    } catch (error) {
      setError("There was an error submitting your review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="review-form">
      <h3>Write a Review</h3>
      {user ? (
        <form onSubmit={handleSubmit}>
          <div className="rating">
            <label>Rating:</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              min="1"
              max="5"
              required
            />
          </div>
          <div className="comment">
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review here..."
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">Review submitted successfully!</p>}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      ) : (
        <p>Please log in to write a review.</p>
      )}
    </div>
  );
};

export default ReviewForm;
