import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-start items-center h-full m-6 p-6 bg-slate-400">
      <ul className="flex flex-col justify-center border-black">
        <li>
          <NavLink to="/">Contact Management</NavLink>
        </li>
        <li>
          <NavLink to="/maps-and-graphs">Maps & Graphs</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
