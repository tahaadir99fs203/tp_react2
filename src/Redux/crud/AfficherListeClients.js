import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteClient } from "./clientActions";

const AfficherListeClients = ({ onEdit }) => {
    const clients = useSelector((state) => state.clients.clients);
    const dispatch = useDispatch();

    const handleDeleteClient = (id) => {
        dispatch(deleteClient(id));
    };

    return (
        <div>
            <h2>Liste des Clients</h2>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        {client.nom}
                        <button onClick={() => onEdit(client.id, client.nom)}>Modifier</button>
                        <button onClick={() => handleDeleteClient(client.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AfficherListeClients;