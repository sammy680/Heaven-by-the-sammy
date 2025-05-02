import axios from 'axios';

const shopifyStoreUrl = process.env.REACT_APP_SHOPIFY_STORE_URL;
const shopifyApiKey = process.env.REACT_APP_SHOPIFY_API_KEY;
const shopifyApiPassword = process.env.REACT_APP_SHOPIFY_API_PASSWORD;

const fetchProducts = async () => {
  try {
    const response = await axios.post(
      `https://${shopifyApiKey}:${shopifyApiPassword}@${shopifyStoreUrl}/api/2023-01/graphql.json`,
      {
        query: `
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
        `,
      }
    );

    return response.data.data.products.edges;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export { fetchProducts };
