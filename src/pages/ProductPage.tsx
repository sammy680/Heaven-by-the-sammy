import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import dummyProducts from "../data/ProductData";

interface Review {
  productId: string;
  review: string;
  rating: number;
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [reviews, setReviews] = useState<Review[]>([]);

  // Finding the product by ID, or defaulting to the first product
  const product = dummyProducts.find((p: { id: string | undefined; }) => p.id === id) || dummyProducts[0];

  // You can load reviews here based on the product ID (simulation for now)
  useEffect(() => {
    // Simulated fetching reviews based on product ID
    const fetchedReviews = [
      { productId: product.id, review: "Great product!", rating: 5 },
      { productId: product.id, review: "Worth the price", rating: 4 },
    ];
    setReviews(fetchedReviews);
  }, [product.id]);

  return (
    <div className="product-page p-6">
      <div className="product-info">
        <img
          src={product.imageSrc}
          alt={product.title}
          className="w-full max-w-sm mb-4"
          loading="lazy"
        />
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p
          className="text-gray-700"
          dangerouslySetInnerHTML={{
            __html: product.descriptionHtml || product.description,
          }}
        />
        <p className="text-xl mt-2">₹ {product.price}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white py-2 px-4 rounded"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="border border-black py-2 px-4 rounded"
        >
          Add to Wishlist
        </button>
      </div>

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
      <div className="mt-8">
        <form className="flex flex-col gap-4">
          <textarea className="p-4 text-sm rounded-md border min-h-[100px] resize-y" />
          <select className="p-2 border rounded-md">
            <option value="">Select Rating</option>
            <option value="5">5 Stars</option>
          </select>
          <button className="bg-black text-white py-2 px-4 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
