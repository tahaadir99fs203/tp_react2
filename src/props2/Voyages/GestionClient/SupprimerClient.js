import React, { useState } from "react";

const SupprimerClient = ({ clients, setClients }) => {
    const [idSupprimer, setIdSupprimer] = useState("");

    const handleDelete = () => {
        setClients(clients.filter)
    }
}