import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  w-64 m-2 p-2 bg-slate-100 shadow-xl  ">
      <ul className="flex flex-col justify-center items-center border-black text-2xl">
        <li className="py-2">
          <NavLink to="/">Contact Management</NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/maps-and-graphs">Maps & Graphs</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
