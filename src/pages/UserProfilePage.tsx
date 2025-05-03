// src/pages/UserProfilePage.tsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const { logout } = useAuth();
const navigate = useNavigate();

const handleLogout = () => {
  logout(); // Clear login
  navigate("/login"); // Redirect to login
};

const UserProfilePage = () => {
  const { isAuthenticated } = useAuth();

  console.log("Is Authenticated?", isAuthenticated); // Debug line

  return <div>User Profile</div>;
};
  const SomeComponent = () => {
    const { isAuthenticated, login, logout } = useAuth();

    // use them safely here
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated (not saved permanently – dummy data).");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">👤 My Profile</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full border px-3 py-2 rounded ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full border px-3 py-2 rounded ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full border px-3 py-2 rounded ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-6"
        >
          Logout
        </button>

        <div className="mt-4 flex gap-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
