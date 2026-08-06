import React, { useState } from "react";

const AjouterClient = ({ clients, setClients }) => {
    const [nom, setNom] = useState("");

    const handleAdd = () => {
        if (nom.trim() === "") return;
        setClients([...clients, { id: Date.now(), nom}]);
        setNom("");
    };

    return (
        <div>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            <button onClick={handleAdd}>Ajouter Client</button>
        </div>
    );
};

export default AjouterClient;