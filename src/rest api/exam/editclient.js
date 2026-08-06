import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditClient({ clients, onUpdate }) {
  const { id } = useParams();
  const client = clients.find(c => c.id === parseInt(id));
  const [name, setName] = useState(client?.name || "");
  const [city, setCity] = useState(client?.city || "");
  const navigate = useNavigate();

  if (!client) return <div>Client not found</div>;

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate({ id: client.id, name, city });
    navigate("/clients");
  }

  return (
    <div>
      <h2>Edit Client</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <input value={city} onChange={e => setCity(e.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditClient;