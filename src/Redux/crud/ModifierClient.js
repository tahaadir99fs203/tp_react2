import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateClient } from "./clientActions";

const ModifierClient = ({ id, currentNom, onClose }) => {
    const dispatch = useDispatch();
    const [updatedNom, setUpdatedNom] = useState(currentNom);

    const handleUpdateClient = () => {
        dispatch(updateClient(id, { nom: updatedNom }));
        onClose();
    };

    return (
        <div>
            <h2>Modifier un Client</h2>
            <label>Nom: </label>
            <input
            type="text"
            value={updatedNom}
            onChange={(e) => setUpdatedNom(e.target.value)}
            />
            <br />
            <button onClick={handleUpdateClient}>Modifier</button>
            <button onVolumeChange={onClose}>Annuler</button>
        </div>
    );
};

export default ModifierClient;