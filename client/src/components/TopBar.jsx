import React, { useState, useEffect } from 'react';
import { ReactComponent as L } from '../../src/components/svg/L.svg';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [change, setChange] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={` fixed w-full flex justify-center items-center transition-all duration-500 ease-in-out ${isScrolled
        ? 'text-[#4A628A] bg-[#DFF2EB] border-b border-[#7AB2D3] shadow-sm'
        : 'bg[#4A628A] text-white'
        }`}
    >
      <div
        className={`transition-colors items-center flex justify-between px-10 duration-500 ease-in-out ${isScrolled
          ? 'w-full p-3 px-4'
          : 'w-[90%] mt-5 border-2 p-3 rounded-2xl px-6 flex justify-between'
          }`}
      >
        {/* Logo */}
        <div>
          <L
            className={`transition-colors duration-500 ease-in-out`}
            fill={isScrolled ? '#4A628A' : '#FFFFFF'}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4">
          {items.map((item, index) => (
            <Link
              key={index}
              className={`cursor-pointer transition-colors duration-300 
                ${change === item.name ? 'text-[#4A628A]' : 'text-white'} // Manual click color change
              `}
              activeClass="text-[#4A628A]" // Automatically adds this class when scrolled to this section
              to={item.url}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={() => setChange(item.name)} // Updates the state when the section becomes active during scroll
              onClick={() => setChange(item.name)} // Update state when manually clicked
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Sign In/Sign Up Buttons */}
        <div className="flex gap-3 text-white">
          <NavLink
            to={'/signIn'}
            className="rounded-md bg-transparent border border-white py-1 px-3 hover:bg-white hover:text-[#4A628A] transition"
          >
            Sign In
          </NavLink>
          <NavLink
            className="bg-white text-[#4A628A] rounded-md border-2 border-[#4A628A] py-1 px-3 hover:bg-[#4A628A] hover:text-white transition"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}

const items = [
  { name: 'Home', url: 'home' },
  { name: 'Item', url: 'item' },
  
];

export default TopBar;


//   const b = () => {
//     return 'blue';
//   };
//   bg-${b()}


// Online Meeting Point
// Between Those Looking for Lost Items and Those Who’ve Found Them

// Lost & Found: The First Online Meeting Point
// Where Seekers and Finders Connect

// A platform for those who have lost items to post their missing products and for those who find them to reach out and connect.