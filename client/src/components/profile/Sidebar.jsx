import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { ReactComponent as L } from '../svg/L.svg';
import { IoIosSearch } from "react-icons/io";
import { MdAddAPhoto } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { HiLogout } from "react-icons/hi";

const Sidebar = () => {
  const [active, setActive] = useState(null);
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    navigate('/signIn'); // Redirect to sign-in page
  };

  // Static menu data
  const menuData = [
    { title: "Home", icon: <AiFillHome />, url: "status" },
    { title: "Search", icon: <IoIosSearch />, url: "Search" },
    { title: "Add", icon: <MdAddAPhoto />, url: "" },
  ];

  const redirectTo = () => {
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col justify-between w-[250px] bg-[#232222]">
      <div >
        <div className="flex flex-col px-4 items-center py-6">
          <span onClick={redirectTo}>
            <L
              fill={'#FFFFFF'}
            />
          </span>
        </div>
        <div className="flex flex-col text-white w-full pl-2">
          {menuData.map((menu, index) => (
            <SidebarMenu
              key={index}
              menu={menu}
              index={index}
              setActive={setActive}
              setHover={setHover}
              active={active}
              hover={hover}
            />
          ))}
        </div>
      </div>
      <div>
      <div className="relative bg-transparent text-xl border-t border-[#98989877] mr-3 p-2 gap-3 pb-6 pl-6 text-white flex flex-row items-center w-full px-4 py-3 cursor-pointer">
        <IoSettingsSharp /> <h1>Setting

        </h1>
      </div>
      <h1 className="relative bg-transparent text-xl  mr-3  gap-3 pb-6 pl-6 text-white flex flex-row items-center w-full px-4 py-3 cursor-pointer">
        <dive
          onClick={handleLogout}
          className=" flex items-center gap-3  text-white rounded-lg"
        ><HiLogout />
          Logout
        </dive>

      </h1>
      </div>
    </div>

  );
};

const SidebarMenu = ({ menu, index, setActive, setHover, active, hover }) => {
  const isActive = active === index;
  const isHover = hover === index;

  return (
    <Link to={menu.url}>
      <div
        className={`relative flex flex-row items-center w-full px-4 py-3 cursor-pointer
          ${isActive ? "bg-black text-white rounded-l-lg" : ""}
          ${isHover && !isActive
            ? "hover:bg-black hover:text-white hover:rounded-l-lg"
            : ""
          }`}
        onClick={() => setActive(index)}
        onMouseEnter={() => setHover(index)}
        onMouseLeave={() => setHover(null)}
      >
        <div
          className={`text-2xl mr-3 p-2 rounded-lg ${isActive || isHover ? "bg-white text-black" : "bg-transparent text-white"
            }`}
        >
          {menu.icon}
        </div>
        <span className="text-sm">{menu.title}</span>
      </div>
    </Link>
  );
};

export default Sidebar;
