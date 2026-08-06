import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addClient } from "./clientActions";

const AjouterClient = () => {
    const dispatch = useDispatch();
    const [newClient, setNewClient] = useState({ id: '', nom: '' });

    const handleAddClient = () => {
        dispatch(addClient(newClient));
        setNewClient({ id: '', nom: '' });
    };

    return (
        <div>
            <h2>Ajouter un Client</h2>
            <label>Nom: </label>
            <input
            type="text"
            value={newClient.nom}
            onChange={(e) => setNewClient({ ...newClient, nom: e.target.value })}
            />
            <br />
            <button onClick={handleAddClient}>Ajouter</button>
        </div>
    );
};

export default AjouterClient;