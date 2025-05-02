// src/pages/CartPage.tsx
import React from "react";
import { useCart } from "../context/CartContext";


const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border p-4 mb-4">
            <img src={item.imageSrc} alt={item.title} className="w-24 h-24" />
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-700">${item.price}</p>
            <div className="flex items-center mt-2">
              <label className="mr-2">Qty:</label>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
                className="border w-16 text-center"
              />
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white py-1 px-3 mt-2 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
