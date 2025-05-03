// src/pages/CheckoutPage.tsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    paymentMethod: "creditCard",
  });

  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    toast.success("🎉 Checkout successful!");
    navigate("/order-success");

    clearCart();

    setTimeout(() => {
      navigate("/"); // Redirect to homepage after checkout
    }, 2000);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛍️ Checkout</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg mb-4">Your cart is currently empty.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center border p-4 rounded-lg shadow-md"
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-28 h-28 object-cover rounded mb-4 md:mb-0 md:mr-6"
              />
              <div className="flex-1 w-full">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">
                  Price: ₹{parseFloat(item.price).toFixed(2)}
                </p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">
                  Total: ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <h3 className="text-2xl font-bold">
              Total: ₹{totalAmount.toFixed(2)}
            </h3>

            <div className="mt-4 space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full border rounded px-3 py-2"
              />
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            <div className="mt-6 space-x-4">
              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Place Order
              </button>
              <Link
                to="/cart"
                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
              >
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
