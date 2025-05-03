import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { dummyProducts } from "../data/productData";

interface Review {
  productId: string;
  review: string;
  rating: number;
}

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [reviews, setReviews] = useState<Review[]>([]);

  const product = dummyProducts.find((p) => p.id === id) || dummyProducts[0];

  return (
    <div className="product-page p-6">
      <img
        src={product.imageSrc}
        alt={product.title}
        className="w-full max-w-sm mb-4"
      />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: product.descriptionHtml as string}}
      />
      <p className="text-xl mt-2">${product.price}</p>

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
    </div>
  );
};

export default ProductPage;
