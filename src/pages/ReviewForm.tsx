// src/components/ReviewForm.tsx
import React, { useState } from "react";

interface ReviewFormProps {
  productId: string;
  onSubmit: (review: string, rating: number) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ productId, onSubmit }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (review.trim() && rating > 0) {
      onSubmit(review, rating);
      setReview("");
      setRating(0);
    }
  };

  return (
    <div className="review-form p-4 border rounded-md mt-4">
      <h3 className="text-lg font-semibold mb-2">Leave a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          className="w-full border rounded p-2"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here"
          required
        />
        <div className="flex items-center space-x-2">
          <label htmlFor="rating" className="font-medium">
            Rating:
          </label>
          <select
            id="rating"
            className="border rounded px-2 py-1"
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
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
