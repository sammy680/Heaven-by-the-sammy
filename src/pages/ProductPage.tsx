// src/pages/ProductPage.tsx

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import dummyProducts from "../data/ProductData"; // assuming default export
import ScrollToTop from "../components/ScroolToTop";

interface Review {
  productId: string;
  rating: number;
  comment: string;
}

const ProductPage: React.FC = () => {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(dummyProducts.map((p) => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? dummyProducts
      : dummyProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <ScrollToTop />
      <h1 className="text-3xl font-semibold mb-6">All Products</h1>

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md border transition ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-white text-black border-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
