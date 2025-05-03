// src/pages/ProfileEditPage.tsx
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
    // Load existing profile data (from localStorage for now)
    const profile = localStorage.getItem("userProfile");
    if (profile) {
      setFormData(JSON.parse(profile));
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
          placeholder="Avatar Image URL"
          className="w-full border px-3 py-2 rounded"
        />

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
