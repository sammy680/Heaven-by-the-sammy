// CheckoutPage.tsx
import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { useHistory } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cartItems, totalAmount, clearCart } = useContext(CartContext);
  const history = useHistory();

  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can send this data to backend / firebase
    console.log("Order placed:", {
      items: cartItems,
      total: totalAmount,
      shipping: shippingDetails,
    });

    clearCart();
    history.push("/thank-you");
  };

  return (
    <div className="checkout-page-container">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items before checking out.</p>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Shipping Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shippingDetails.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingDetails.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingDetails.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={shippingDetails.postalCode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={shippingDetails.country}
            onChange={handleChange}
            required
          />

          <div className="checkout-summary">
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutPage;
