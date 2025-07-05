import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h2>Navbar</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/price"}>Price</Link>
    </nav>
  );
}

export default Navbar;
