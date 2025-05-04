import axios from "axios";

const shopifyStoreUrl = process.env.REACT_APP_SHOPIFY_STORE_URL;
const shopifyApiKey = process.env.REACT_APP_SHOPIFY_API_KEY;
const shopifyApiPassword = process.env.REACT_APP_SHOPIFY_API_PASSWORD;

const fetchProducts = async () => {
  const endpoint = `https://${shopifyApiKey}:${shopifyApiPassword}@${shopifyStoreUrl}/api/2023-01/graphql.json`;

  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            descriptionHtml
            priceRange {
              minVariantPrice {
                amount
              }
            }
            featuredImage {
              originalSrc
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(endpoint, { query });

    const rawProducts = response.data.data.products.edges;

    // Optional: transform to simpler format
    const formattedProducts = rawProducts.map(({ node }) => ({
      id: node.id,
      title: node.title,
      description: node.descriptionHtml,
      price: node.priceRange.minVariantPrice.amount,
      imageSrc: node.featuredImage?.originalSrc || "/images/default-product.jpg",
    }));

    return formattedProducts;
  } catch (error: any) {
    console.error("❌ Error fetching Shopify products:", error.message);
    return [];
  }
};

export { fetchProducts };
