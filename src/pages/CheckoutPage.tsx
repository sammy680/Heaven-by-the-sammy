// src/pages/CheckoutPage.tsx
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    // Simulate checkout success
    toast.success("Checkout successful! 🎉");
    clearCart();

    // Redirect after checkout
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🧾 Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-lg">Your cart is currently empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">
                  Price: ${parseFloat(item.price).toFixed(2)}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold">
                  Total: ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="text-right text-2xl font-bold border-t pt-4">
            Total Amount: ${totalAmount.toFixed(2)}
          </div>

          <button
            onClick={handleCheckout}
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded w-full text-lg transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
