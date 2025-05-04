import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileEditPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    // Load profile data from localStorage on mount
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      try {
        setFormData(JSON.parse(storedProfile));
      } catch (error) {
        console.error("Error parsing userProfile:", error);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(formData));
    alert("✅ Profile updated successfully!");
    navigate("/profile");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">✏️ Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="avatar" className="block mb-1 font-medium">
            Avatar Image URL
          </label>
          <input
            type="text"
            id="avatar"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="https://example.com/avatar.jpg"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Optional: Preview Avatar */}
        {formData.avatar && (
          <div className="mt-4">
            <p className="mb-1 text-sm text-gray-600">Avatar Preview:</p>
            <img
              src={formData.avatar}
              alt="Avatar Preview"
              className="w-20 h-20 rounded-full border shadow"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileEditPage;
