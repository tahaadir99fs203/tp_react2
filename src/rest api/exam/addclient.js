import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddClient({ onAdd }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ name, city });
    navigate("/clients");
  }

  return (
    <div>
      <h2>Add Client</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddClient;