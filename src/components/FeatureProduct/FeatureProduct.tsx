import React from "react";
import "./FeatureProduct.css"; // Make sure to create this CSS file in the same folder

const featureProducts = [
  {
    id: 1,
    title: "Signature Hoodie",
    description: "Premium cotton blend with minimalist embroidery.",
    image: "/* IMAGE_PLACEHOLDER_1 */",
  },
  {
    id: 2,
    title: "Luxury Tee",
    description: "Soft, breathable, and designed for elevated everyday wear.",
    image: "/* IMAGE_PLACEHOLDER_2 */",
  },
  {
    id: 3,
    title: "Street Style Jacket",
    description: "Statement outerwear with clean lines and bold vibes.",
    image: "/* IMAGE_PLACEHOLDER_3 */",
  },
];

const FeatureProduct: React.FC = () => {
  return (
    <section className="feature-product-section" data-aos="fade-up">
      <div className="feature-product-header">
        <h2>Featured Products</h2>
        <p>Explore our latest hand-picked collections</p>
      </div>

      <div className="feature-product-grid">
        {featureProducts.map((product) => (
          <div
            key={product.id}
            className="feature-product-card"
            data-aos="zoom-in"
          >
            <div className="feature-product-img">
              <img src={product.image} alt={product.title} loading="lazy" />
            </div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureProduct;
