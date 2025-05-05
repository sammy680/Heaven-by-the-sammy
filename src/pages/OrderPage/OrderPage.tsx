// OrderPage.tsx
import React, { useEffect, useState } from "react";
import "../styles/OrderPage.css";

interface Order {
  id: string;
  date: string;
  status: string;
  total: string;
  items: {
    name: string;
    quantity: number;
    price: string;
  }[];
}

const OrderPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Dummy fetch (replace with real API call)
    const fetchedOrders: Order[] = [
      {
        id: "ORD123456",
        date: "2025-05-01",
        status: "Delivered",
        total: "$150.00",
        items: [
          { name: "White Oversized Tee", quantity: 1, price: "$50.00" },
          { name: "Vintage Denim Jeans", quantity: 1, price: "$100.00" },
        ],
      },
    ];
    setOrders(fetchedOrders);
  }, []);

  return (
    <section className="order-page" data-aos="fade-up">
      <h2 className="order-page__title">My Orders</h2>

      {orders.length === 0 ? (
        <p className="order-page__empty">No orders found.</p>
      ) : (
        <div className="order-page__list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="order-card__header">
                <h4>Order #{order.id}</h4>
                <span>{order.date}</span>
              </div>
              <div className="order-card__details">
                <p>
                  Status: <strong>{order.status}</strong>
                </p>
                <p>
                  Total: <strong>{order.total}</strong>
                </p>
              </div>
              <div className="order-card__items">
                <h5>Items:</h5>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.quantity} x {item.name} - {item.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderPage;
