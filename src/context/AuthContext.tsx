// src/context/AuthContext.tsx
import React, { createContext, ReactNode, useContext, useState } from "react";

// Defining the AuthContextType with state and functions for login/logout
type AuthContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
};

// Creating the AuthContext with an initial value of 'undefined'
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component that wraps the app and provides authentication state and methods
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Function to login and set the user as authenticated
  const login = () => {
    setIsAuthenticated(true);
  };

  // Function to logout and remove the user authentication
  const logout = () => {
    localStorage.removeItem("userEmail"); // Clear user email from localStorage (if needed)
    setIsAuthenticated(false); // Set the user as unauthenticated
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        isLoggedIn: isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access AuthContext in any component
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
