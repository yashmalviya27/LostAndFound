import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Private = () => {
  const token = localStorage.getItem('token'); // Retrieve the token from local storage

  // Conditional rendering based on token existence
  return token ? <Outlet /> : <Navigate to="/signIn" />;
};

export default Private;
