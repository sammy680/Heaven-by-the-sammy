// CartPage.tsx
import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { useHistory } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, totalAmount, clearCart } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    // Redirect to home page if cart is empty
    if (cartItems.length === 0) {
      history.push("/");
    }
  }, [cartItems, history]);

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log("Proceeding to checkout...");
    // Redirect to checkout page
    history.push("/checkout");
  };

  return (
    <div className="cart-page-container">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start adding items to your cart!</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
          <div className="cart-summary">
            <div className="total-amount">
              <h2>Total: ${totalAmount.toFixed(2)}</h2>
            </div>
            <div className="cart-actions">
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
