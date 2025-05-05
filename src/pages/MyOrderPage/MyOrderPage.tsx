// MyOrderPage.tsx
import React, { useEffect, useState } from "react";
import "../styles/MyOrderPage.css";

interface Order {
  id: string;
  date: string;
  total: number;
  items: {
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
}

const MyOrderPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Dummy data for now; replace with real API call
    const dummyOrders: Order[] = [
      {
        id: "order123",
        date: "2025-05-01",
        total: 299.99,
        items: [
          {
            name: "Black Luxe Jacket",
            quantity: 1,
            price: 299.99,
            image: "/images/product1.jpg", // Replace with actual path
          },
        ],
      },
    ];

    setOrders(dummyOrders);
  }, []);

  return (
    <div className="order-page">
      <h2 className="order-title">My Orders</h2>

      {orders.length === 0 ? (
        <p className="no-orders">You haven’t placed any orders yet.</p>
      ) : (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card" data-aos="fade-up">
              <h3>Order #{order.id}</h3>
              <p>Date: {order.date}</p>
              <p>Total: ₹{order.total.toFixed(2)}</p>

              <div className="order-items">
                {order.items.map((item, index) => (
                  <div key={index} className="order-item">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p>Qty: {item.quantity}</p>
                      <p>Price: ₹{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrderPage;
