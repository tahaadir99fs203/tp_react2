import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductsList({ products, onDelete }) {
  const [nameFilter, setNameFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = products
    .filter(p => p.name.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter(p => !maxPrice || p.price <= parseFloat(maxPrice));

  return (
    <div>
      <h2>Products List</h2>
      <Link to="/products/add">Add Product</Link>
      <div>
        <input placeholder="Filter by name" value={nameFilter} onChange={e => setNameFilter(e.target.value)} />
        <input placeholder="Max price" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
      </div>
      <ul>
        {filteredProducts.map(p => (
          <li key={p.id}>
            {p.name} - {p.price} DH - Stock: {p.stock}
            <button onClick={() => onDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;