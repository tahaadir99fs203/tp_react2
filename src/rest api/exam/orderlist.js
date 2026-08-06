import React, { useState } from "react";
import { Link } from "react-router-dom";

function OrdersList({ orders, clients, products }) {
  const [clientFilter, setClientFilter] = useState("");

  const filteredOrders = clientFilter
    ? orders.filter(o => o.clientId === parseInt(clientFilter))
    : orders;

  function getClientName(clientId) {
    const client = clients.find(c => c.id === clientId);
    return client ? client.name : "Unknown";
  }

  function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  }

  return (
    <div>
      <h2>Orders List</h2>
      <Link to="/orders/add">Add Order</Link>
      <div>
        <select value={clientFilter} onChange={e => setClientFilter(e.target.value)}>
          <option value="">All Clients</option>
          {clients.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>
      <ul>
        {filteredOrders.map(o => (
          <li key={o.id}>
            Client: {getClientName(o.clientId)} | Date: {o.date} | Total: {calculateOrderTotal(o)}
            {" "} <Link to={`/orders/${o.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersList;