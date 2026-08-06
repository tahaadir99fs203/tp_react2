import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddOrder({ clients, products, onAdd }) {
  const [clientId, setClientId] = useState("");
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  function handleAddItem(productId, quantity) {
    const q = parseInt(quantity);
    if (!q) return;
    setItems(prev => [...prev, { productId: parseInt(productId), quantity: q }]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!clientId || items.length === 0) return;
    onAdd({ clientId: parseInt(clientId), items, date: new Date().toISOString().split("T")[0] });
    navigate("/orders");
  }

  return (
    <div>
      <h2>Add Order</h2>
      <form onSubmit={handleSubmit}>
        <select value={clientId} onChange={e => setClientId(e.target.value)}>
          <option value="">Select Client</option>
          {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <div>
          {products.map(p => (
            <div key={p.id}>
              {p.name} - Stock: {p.stock}
              <input
                type="number"
                placeholder="Qty"
                min="1"
                max={p.stock}
                onChange={e => handleAddItem(p.id, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
}

export default AddOrder;