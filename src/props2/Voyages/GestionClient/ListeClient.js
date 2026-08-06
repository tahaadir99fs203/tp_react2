import React from "react";

const ListeClient = ({ clients }) => {
    return (
        <div>
            <h3>Liste des clients</h3>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>{client.nom}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListeClient;