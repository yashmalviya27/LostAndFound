import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false); // State to manage redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.token) {
      // Store token and user data in local storage
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.email); // Assuming data.userId is the user's ID
      localStorage.setItem('username', data.username); // Assuming data.username is the user's name
      toast.success("Login successful!");
      setRedirect(true); // Set redirect to true
    } else {
      console.error(data.msg);
      toast.error(data.msg); // Show error toast
    }
  };

  // Redirect if the login is successful
  if (redirect) {
    return <Navigate to={'/private/dashboard'} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#DFF2EB]">
      <Toaster /> {/* Toaster for displaying notifications */}
      <div className="backdrop-blur-lg bg-white/30 p-10 rounded-lg shadow-lg w-full max-w-md border border-white/40">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#4A628A]">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-[#4A628A] text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 bg-white/50 border border-[#B9E5E8] rounded-lg"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#4A628A] text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-3 bg-white/50 border border-[#B9E5E8] rounded-lg"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="w-full py-3 bg-[#7AB2D3] text-white font-semibold rounded-lg">
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-[#4A628A] mt-6">
          Don’t have an account?{' '}
          <Link to={'/signUp'} className="text-[#7AB2D3] font-semibold hover:text-[#4A628A]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
