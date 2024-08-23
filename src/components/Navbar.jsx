import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "red", height: "100px", width: "100%" }}>
      <Link to="/cards">cards</Link>
      <Link to="/about">about</Link>
      <Link to="/login">login</Link>
    </div>
  );
};

export default Navbar;
