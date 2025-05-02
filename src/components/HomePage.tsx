import React, { useEffect, useState } from "react";
import { fetchProducts } from "../utils/shopify";
import ProductCard from "../components/ProductCard";
import { useWishlist } from "../context/WishlistContext";
import { Product } from "../types";

// Dummy data (you can replace this with actual product data)
const products: Product[] = [
  {
    id: "1",
    title: "Luxury White Shirt",
    descriptionHtml: "<p>100% Cotton luxury shirt for everyday elegance.</p>",
    price: "$129",
    imageSrc: "/images/products/shirt1.jpg",
  },
  {
    id: "2",
    title: "Classic Black Jacket",
    descriptionHtml: "<p>Premium leather jacket for any occasion.</p>",
    price: "$299",
    imageSrc: "/images/products/jacket1.jpg",
  },
  // Add more products here...
];

const HomePage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    getProducts();
  }, []);

  const handleAddToWishlist = (product: any) => {
    const newProduct = {
      id: product.node.id,
      title: product.node.title,
      descriptionHtml: product.node.descriptionHtml,
      price: product.node.priceRange.minVariantPrice.amount,
      imageSrc: product.node.featuredImage.originalSrc,
    };
    addToWishlist(newProduct);
  };

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId);
  };

  return (
    <div className="home-page p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Heaven by The Sammy's</h1>
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"></div>
        {products.map((product) => (
          
          <div key={product.node.id} className="product-card">
            <img
              src={product.node.featuredImage.originalSrc}
              alt={product.node.title}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{product.node.title}</h3>
            <p>{product.node.descriptionHtml}</p>
            <p>Price: ${product.node.priceRange.minVariantPrice.amount}</p>
            <button onClick={() => handleAddToWishlist(product)}>
              Add to Wishlist
            </button>
            {wishlist.some((item) => item.id === product.node.id) && (
              <button onClick={() => handleRemoveFromWishlist(product.node.id)}>
                Remove from Wishlist
              </button>
            )}
          </div>
        ))}
      </div>
  );
};

export default HomePage;
