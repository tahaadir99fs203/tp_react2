import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/clients">Clients</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/orders">Orders</Link> |{" "}
      <Link to="/statistics">Statistics</Link>
    </nav>
  );
}

export default Navbar;