// ProfileEditPage.tsx
import React, { useState, useEffect } from "react";
import "../styles/ProfileEditPage.css";

const ProfileEditPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    // Dummy existing user data
    setName("The Sammy");
    setEmail("sammy@example.com");
    setPhone("9876543210");
    setAddress("Sammy's Avenue, Fashion Street");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic (API integration placeholder)
    console.log({ name, email, phone, address });
    alert("Profile updated successfully!");
  };

  return (
    <section className="profile-edit-section" data-aos="fade-up">
      <div className="profile-edit-container">
        <h2 className="profile-edit-title">Edit Your Profile</h2>
        <form className="profile-edit-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              required
            />
          </div>

          <button className="btn btn-save" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProfileEditPage;
