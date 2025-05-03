// src/context/AuthContext.tsx
import React, { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const logout = () => {
  localStorage.removeItem("userEmail");
  setIsAuthenticated(false);
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, isLoggedIn: isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
function setIsAuthenticated(arg0: boolean) {
  throw new Error("Function not implemented.");
}

