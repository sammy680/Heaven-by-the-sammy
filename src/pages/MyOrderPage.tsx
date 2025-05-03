// src/pages/MyOrdersPage.tsx
import React from "react";

const dummyOrders = [
  {
    id: "ORD123",
    date: "2025-04-28",
    total: 3999,
    status: "Delivered",
    items: [
      { title: "Oversized T-Shirt", quantity: 2, price: 999 },
      { title: "Denim Jacket", quantity: 1, price: 1999 },
    ],
  },
  {
    id: "ORD124",
    date: "2025-04-20",
    total: 2599,
    status: "Shipped",
    items: [
      { title: "Cargo Pants", quantity: 1, price: 1299 },
      { title: "Graphic Hoodie", quantity: 1, price: 1299 },
    ],
  },
];

const MyOrdersPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📦 My Orders</h1>

      {dummyOrders.map((order) => (
        <div
          key={order.id}
          className="border border-gray-300 rounded-lg p-4 mb-6 shadow"
        >
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-xl font-semibold">Order #{order.id}</h2>
              <p className="text-gray-600">Date: {order.date}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-800 font-bold">₹{order.total}</p>
              <p
                className={`text-sm ${
                  order.status === "Delivered"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {order.status}
              </p>
            </div>
          </div>
          <ul className="space-y-2">
            {order.items.map((item, index) => (
              <li key={index} className="flex justify-between text-sm">
                <span>
                  {item.title} × {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MyOrdersPage;
