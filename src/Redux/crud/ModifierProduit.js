import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduit } from "./produitActions";

const ModifierProduit = ({ id, currentNom, currentPrix, onClose }) => {
    const dispatch = useDispatch();
    const [updatedNom, setUpdatedNom] = useState(currentNom);
    const [updatedPrix, setUpdatedPrix] = useState(currentPrix);

    const handleUpdateProduit = () => {
        dispatch(updateProduit(id, { nom: updatedNom, prix: updatedPrix }));
        onClose();
    };

    return (
        <div>
            <h2>Modifier un Produit</h2>
            <label>Nom: </label>
            <input
            type="text"
            value={updatedNom}
            onChange={(e) => setUpdatedNom(e.target.value)}
            />
            <br />
            <label>Prix: </label>
            <input
            type="text"
            value={updatedPrix}
            onChange={(e) => setUpdatedPrix(e.target.value)}
            />
            <br />
            <button onClick={handleUpdateProduit}>Modifier</button>
            <button onClick={onClose}>Annuler</button>
        </div>
    );
};

export default ModifierProduit;