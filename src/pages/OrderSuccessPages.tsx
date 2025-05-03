// src/pages/OrderSuccessPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-xl text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your order has been placed successfully.
        </p>
        <p className="text-gray-500 mb-4">
          You’ll receive a confirmation email shortly.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
