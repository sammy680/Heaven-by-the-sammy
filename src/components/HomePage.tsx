import React, { useEffect, useState } from "react";
import { fetchProducts } from "../utils/shopify";
import { useWishlist } from "../context/WishlistContext";

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
    <div>
      <h1>Welcome to Heaven by The Sammy's</h1>
      <div className="product-list">
        {products.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>No products to display. Connect your Shopify store to fetch products.</p>
        ) : (
        products.map((product) => (
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
        ))
      )}</div>
    </div>
  );
};

export default HomePage;
