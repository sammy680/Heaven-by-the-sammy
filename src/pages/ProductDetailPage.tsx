// src/pages/ProductDetailPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import dummyProducts from "../data/ProductData";
import { Product } from "../types";

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const product: Product | undefined = dummyProducts.find(
    (p) => p.id === productId
  );

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500 text-xl">
        Product not found.
      </div>
    );
  }

  const handleAddToCart = () => addToCart(product);
  const handleAddToWishlist = () => addToWishlist(product);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <img
          src={product.imageSrc || product.imageSrc}
          alt={product.title}
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl text-gray-700 font-semibold">₹{product.price}</p>
        <button
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button
          className="ml-4 px-4 py-2 border border-black rounded hover:bg-gray-100"
          onClick={handleAddToWishlist}
        >
          Add to Wishlist
        </button>

        <div className="mt-6 prose max-w-none">
          <h2>Description</h2>
          <div
            dangerouslySetInnerHTML={{
              __html:
                product.descriptionHtml ||
                product.description ||
                "<p>No description available.</p>",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
