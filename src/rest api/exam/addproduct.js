import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ name, price: parseFloat(price), stock: parseInt(stock) });
    navigate("/products");
  }

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
        <input placeholder="Stock" value={stock} onChange={e => setStock(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;