// LoginSignupPage.tsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/LoginSignupPage.css";

const LoginSignupPage = () => {
  const { login, signup } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const toggleMode = () => setIsLoginMode((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginMode) {
      await login(formData.email, formData.password);
    } else {
      await signup(formData.email, formData.password);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container" data-aos="zoom-in">
        <h2>{isLoginMode ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-btn">
            {isLoginMode ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="toggle-text">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleMode} className="toggle-link">
            {isLoginMode ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupPage;
