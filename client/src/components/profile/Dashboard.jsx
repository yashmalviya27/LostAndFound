import React from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    navigate('/signIn'); // Redirect to sign-in page
  };

  return (
    <div>
         <button
        onClick={handleLogout}
        className="py-2 px-4 bg-red-500 text-white rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
