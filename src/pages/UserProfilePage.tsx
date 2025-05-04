import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserProfilePage: React.FC = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Load from localStorage (simulate persistent user data)
  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUserData((prev) => ({
          ...prev,
          ...parsed,
        }));
      } catch (error) {
        console.error("Error parsing profile:", error);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(userData));
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">👤 My Profile</h1>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            id="name"
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
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
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
          <label htmlFor="address" className="block mb-1 font-medium">
            Address
          </label>
          <input
            id="address"
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

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>

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
