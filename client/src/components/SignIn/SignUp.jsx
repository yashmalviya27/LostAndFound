import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (data.token) {
      console.log('Sign Up successful');
    } else {
      console.error(data.msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#B9E5E8]">
      <div className="backdrop-blur-lg bg-white/30 p-10 rounded-lg shadow-lg w-full max-w-md border border-white/40">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#4A628A]">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-[#4A628A] text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-3 bg-white/50 border border-[#B9E5E8] rounded-lg"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
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
            />
          </div>
          <button type='submit' className="w-full py-3 bg-[#7AB2D3] text-white font-semibold rounded-lg">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
