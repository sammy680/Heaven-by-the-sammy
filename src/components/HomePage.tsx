import React, { useEffect, useState } from "react";
import { fetchProducts } from "../utils/shopify";
import { useWishlist } from "../context/WishlistContext";

// Define the Product type
interface Product {
  id: string;
  title: string;
  descriptionHtml: string;
  price: string;
  imageSrc: string;
}


const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

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

  const handleAddToWishlist = (product: Product) => {
    addToWishlist(product);
  };

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId);
  };

  if (loading) return <p className="text-center py-6">Loading products...</p>;
  if (error) return <p className="text-center text-red-500 py-6">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to Heaven by The Sammy's
      </h1>
      <div className="text-3xl font-bold underline text-blue-600">
        Hello Tailwind!
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">
          No products to display. Connect your Shopify store to fetch products.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const isInWishlist = wishlist.some(
              (item) => item.id === product.id
            );

            return (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow-md p-4 flex flex-col justify-between"
              >
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p
                  className="text-sm text-gray-600 mb-2"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
                <p className="text-sm font-medium mb-4">
                  Price: ${product.price}
                </p>

                {!isInWishlist ? (
                  <button
                    onClick={() => handleAddToWishlist(product)}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Add to Wishlist
                  </button>
                ) : (
                  <>
                    <button
                      className="bg-gray-400 text-white py-2 px-4 rounded cursor-not-allowed mb-2"
                      disabled
                    >
                      In Wishlist
                    </button>
                    <button
                      onClick={() => handleRemoveFromWishlist(product.id)}
                      className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                    >
                      Remove from Wishlist
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
