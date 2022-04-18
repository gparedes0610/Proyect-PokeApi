import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white md:px-10 px-7  ">
        <div className="font-bold text-2xl  flex items-center font-sans text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 ">
            <img src={Logo} alt="relix" className="w-24" />
          </span>
        </div>

        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`text-xl py-1 md:py-0 md:flex md:items-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-350 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <li className="my-4 md:ml-8 md:my-0">
            <NavLink
              to={`/`}
              className="text-gray-800 hover:text-gray-400 duration-500 "
            >
              Home
            </NavLink>
          </li>
          <li className="my-4 md:ml-8 md:my-0">
            <NavLink
              to={`/registra-pokemon`}
              className="text-gray-800 hover:text-gray-400 duration-500 "
            >
              Registra tu pokemon
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
