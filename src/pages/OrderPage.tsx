// src/pages/OrdersPage.tsx
import React, { useEffect, useState } from "react";

interface OrderItem {
  id: string;
  title: string;
  quantity: number;
  price: string;
  imageSrc: string;
}

const OrdersPage = () => {
  const [orders, setOrders] = useState<OrderItem[][]>([]);

  useEffect(() => {
    // Simulated: get past orders from localStorage
    const savedOrders = localStorage.getItem("pastOrders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📦 Your Orders</h1>
      {orders.length === 0 ? (
        <p className="text-center text-lg">No orders placed yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border p-4 rounded-lg mb-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Order #{index + 1}</h2>
            {order.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-3"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity} | Price: ₹
                      {parseFloat(item.price).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="font-bold">
                  ₹{(item.quantity * parseFloat(item.price)).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersPage;
