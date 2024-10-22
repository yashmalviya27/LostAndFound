import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Private = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to check authentication

  // Conditional rendering based on authentication
  return isAuthenticated ? <Outlet /> : <Navigate to="/signIn" />;
};

export default Private;

