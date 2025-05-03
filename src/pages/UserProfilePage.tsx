// src/pages/UserProfilePage.tsx
import React, { useState } from "react";
import toast from "react-hot-toast";

const UserProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: "Sammy",
    email: "sammy@example.com",
    address: "123 Fashion Street, Mumbai",
    paymentMethod: "Credit Card",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    toast.success("✅ Profile updated successfully!");
    // Save logic can go here (localStorage, backend API, etc.)
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">👤 My Profile</h1>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={profileData.email}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          placeholder="Email Address"
        />
        <input
          type="text"
          name="address"
          value={profileData.address}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          placeholder="Shipping Address"
        />
        <select
          name="paymentMethod"
          value={profileData.paymentMethod}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        >
          <option value="Credit Card">Credit Card</option>
          <option value="UPI">UPI</option>
          <option value="PayPal">PayPal</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>

        <button
          onClick={handleSave}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserProfilePage;
