import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink style={{'marginRight'}} to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Header;
