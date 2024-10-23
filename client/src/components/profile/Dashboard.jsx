import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import Sidebar from './Sidebar';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    navigate('/signIn'); // Redirect to sign-in page
  };

  return (
    <>
      <div className='flex w-full h-screen overflow-hidden ' >
        <Sidebar />
        <div className='flex gap-2 bg-black w-full  flex-col' >
          < div className=' bg-black text-white font-sans py-2  h-16 flex items-center justify-between px-7 w-[90%]' >
            <h1 className='flex items-center text-2xl font-[700]' >
              Hello Yash
            </h1>
            <div className='flex items-center gap-2' >
              <img src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" className='h-9 w-9 rounded-full object-cover items-center flex ' />
              <h1 className='text-lg font-sans font-[500]' >Yash Malviya</h1>
            </div>
          </div>
          <div className='px-6 flex flex-col ' >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

const Items = [
  {
    name: 'hello',
    icon: <MdDashboard />,
  }
]


