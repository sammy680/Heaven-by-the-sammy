import React from "react";
import { useParams } from "react-router-dom";
import { dummyProducts, Product } from "../data/productData";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import toast from "react-hot-toast";
import Products from "../data/productData";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = dummyProducts.find((p) => p.id === id) as
    | Product
    | undefined;

  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
      </div>
    );
  }

  const isInWishlist = wishlist.some((item) => item.id === product.id);
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      toast.success("Removed from wishlist");
    } else {
      addToWishlist(product);
      toast.success("Added to wishlist");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <img
        src={product.imageSrc}
        alt={product.title}
        className="w-full h-[400px] object-cover rounded shadow"
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-600 text-lg font-semibold">₹ {product.price}</p>
        <div className="text-sm text-gray-500">
          Category: {product.category}
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: product.descriptionHtml || product.description,
          }}
        />
        {product.descriptionHtml && (
          <div className="flex flex-wrap gap-2">
            {product.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="space-x-4 mt-6">
          <button
            onClick={() => {
              addToCart(product);
              toast.success("Added to cart");
            }}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Add to Cart
          </button>
          <button
            onClick={handleWishlistToggle}
            className={`px-6 py-2 rounded ${
              isInWishlist ? "bg-red-500 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
