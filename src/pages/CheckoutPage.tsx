// src/pages/CheckoutPage.tsx
import React from "react";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();

  const totalAmount = cart.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Checkout successful!");
    clearCart(); // clear cart after fake checkout
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🧾 Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p>
                Total: ${(parseFloat(item.price) * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <hr />
          <div className="text-xl font-bold">
            Total Amount: ${totalAmount.toFixed(2)}
          </div>
          <button
            onClick={handleCheckout}
            className="bg-green-600 text-white py-2 px-4 rounded mt-4"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
