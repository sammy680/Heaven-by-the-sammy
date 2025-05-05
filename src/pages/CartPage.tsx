import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ProductType } from "../types";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const getTotalPrice = () =>
    cart.reduce((total: number, item: ProductType) => {
      return total + parseFloat(item.price) * item.quantity;
    }, 0);

  const handleQuantityChange = (id: string, value: string) => {
    const qty = parseInt(value);
    if (!isNaN(qty) && qty > 0) {
      updateQuantity(id, qty);
    } else {
      toast.error("Quantity must be a number greater than 0");
    }
  };

  const handleRemove = (id: string) => {
    removeFromCart(id);
    toast.success("Item removed from cart");
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg mb-4">Your cart is empty</p>
          <Link
            to="/"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item: { id: React.Key | null | undefined; imageSrc: string | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; price: string; quantity: string | number | readonly string[] | undefined; }) => (
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
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">
                    Price: ${parseFloat(item.price).toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2">
                    <label
                      htmlFor={`qty-${item.id}`}
                      className="mr-2 font-medium"
                    >
                      Quantity:
                    </label>
                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="w-16 border rounded px-2 py-1"
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mt-4 md:mt-0 md:ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <h3 className="text-2xl font-bold">
              Total: ${getTotalPrice().toFixed(2)}
            </h3>
            <div className="mt-4 space-x-4">
              <button
                onClick={handleClearCart}
                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
function updateQuantity(id: string, qty: number) {
  throw new Error("Function not implemented.");
}

function removeFromCart(id: string) {
  throw new Error("Function not implemented.");
}

function clearCart() {
  throw new Error("Function not implemented.");
}

