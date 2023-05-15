import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Contact Management</NavLink>
        </li>
        <li>
          <NavLink to="/maps-and-graphs">Maps & Graphs</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
