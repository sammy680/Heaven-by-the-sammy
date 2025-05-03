// src/components/ProtectedRoute.tsx
import React, { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
