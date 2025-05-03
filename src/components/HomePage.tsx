import React, { useEffect, useState } from "react";
import { fetchProducts } from "../utils/shopify";
import { useWishlist } from "../context/WishlistContext";

// Define the Product type to avoid using 'any'
interface Product {
  id: string;
  title: string;
  descriptionHtml: string;
  price: string;
  imageSrc: string;
}

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // Fetch products on component mount
  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (err) {
        setError("Failed to fetch products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // Add product to wishlist
  const handleAddToWishlist = (product: Product) => {
    const newProduct = {
      id: product.id,
      title: product.title,
      descriptionHtml: product.descriptionHtml,
      price: product.price,
      imageSrc: product.imageSrc,
    };
    addToWishlist(newProduct);
  };

  // Remove product from wishlist
  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId);
  };

  // Conditional rendering for loading, error, and product list
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Welcome to Heaven by The Sammy's</h1>
      <div
        className="product-list"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {products.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            No products to display. Connect your Shopify store to fetch
            products.
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              style={{
                margin: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "250px",
              }}
            >
              <img
                src={product.imageSrc}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              <h3>{product.title}</h3>
              <p
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                style={{ fontSize: "0.9rem", color: "#555" }}
              />
              <p>Price: ${product.price}</p>
              <button
                onClick={() => handleAddToWishlist(product)}
                disabled={wishlist.some((item) => item.id === product.id)}
                style={{
                  backgroundColor: wishlist.some(
                    (item) => item.id === product.id
                  )
                    ? "#ccc"
                    : "#007bff",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                {wishlist.some((item) => item.id === product.id)
                  ? "In Wishlist"
                  : "Add to Wishlist"}
              </button>
              {wishlist.some((item) => item.id === product.id) && (
                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  style={{
                    marginTop: "0.5rem",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  Remove from Wishlist
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
