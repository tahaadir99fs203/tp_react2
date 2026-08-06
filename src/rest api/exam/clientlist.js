import React, { useState } from "react";
import { Link } from "react-router-dom";

function ClientsList({ clients, onDelete }) {
  const [cityFilter, setCityFilter] = useState("");

  const filteredClients = cityFilter
    ? clients.filter(c => c.city.toLowerCase() === cityFilter.toLowerCase())
    : clients;

  return (
    <div>
      <h2>Clients List</h2>
      <Link to="/clients/add">Add Client</Link>
      <div>
        <input
          placeholder="Filter by city"
          value={cityFilter}
          onChange={e => setCityFilter(e.target.value)}
        />
      </div>
      <ul>
        {filteredClients.map(c => (
          <li key={c.id}>
            {c.name} ({c.city}){" "}
            <Link to={`/clients/edit/${c.id}`}>Edit</Link>{" "}
            <button onClick={() => onDelete(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsList;