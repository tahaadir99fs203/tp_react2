import React, { useState } from "react";

const ModifierClient = ({ clients, setClients }) => {
    const [idModifier, setIdModifier] = useState("");
    const [newNom, setNewNom] = useState("");

    const handleChange = () => {
        setClients(clients.map(c => {
            c.id === Number(idModifier) ? { ...c, nom: newNom } : c
        }));
        setIdModifier("");
        setNewNom("");
    };

    return (
        <div>
            <input type="number" value={idModifier} onChange={(e) => setIdModifier(e.target.value)} />
            <input type="text" value={newNom} onChange={(e) => setNewNom(e.target.value)} />
            <button onClick={handleChange}>Modifier</button>
        </div>
    );
};

export default ModifierClient;