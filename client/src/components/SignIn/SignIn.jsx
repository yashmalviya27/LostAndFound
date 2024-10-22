import React from 'react';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#DFF2EB]">
      <div className="backdrop-blur-lg bg-white/30 p-10 rounded-lg shadow-lg w-full max-w-md border border-white/40">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#4A628A]">Sign In</h2>
        <form>
          <div className="mb-6">
            <label className="block text-[#4A628A] text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 bg-white/50 border border-[#B9E5E8] rounded-lg focus:outline-none focus:border-[#7AB2D3] focus:bg-white/80"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#4A628A] text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-3 bg-white/50 border border-[#B9E5E8] rounded-lg focus:outline-none focus:border-[#7AB2D3] focus:bg-white/80"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full py-3 bg-[#7AB2D3] hover:bg-[#4A628A] text-white font-semibold rounded-lg shadow-md transition duration-300"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-[#4A628A] mt-6">
          Don’t have an account?{' '}
          <a href="/signUp" className="text-[#7AB2D3] font-semibold hover:text-[#4A628A]">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
