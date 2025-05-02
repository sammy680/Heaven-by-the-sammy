import React, { useState } from "react";

interface ReviewFormProps {
  productId: string;
  onSubmit: (review: string, rating: number) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ productId, onSubmit }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (review && rating > 0) {
      onSubmit(review, rating);
      setReview("");
      setRating(0);
    }
  };

  return (
    <div className="review-form">
      <h3>Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here"
          required
        />
        <div>
          <label>Rating: </label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            <option value={0}>Select Rating</option>
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r} Star{r > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
