import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/statistics">Statistics</Link></li>
      </ul>
    </div>
  );
}

export default Home;