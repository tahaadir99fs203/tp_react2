import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduit } from "./produitActions"

const AjouterProduit = () => {
    const dispatch = useDispatch();
    const [newProduit, setNewProduit] = useState({ id: '', nom: '', prix: '' });

    const handleAddProduit = () => {
        dispatch(addProduit(newProduit));
        setNewProduit({ id: '', nom: '', prix: '' });
    };

    return (
        <div>
            <h2>Ajouter un Produit</h2>
            <label>Nom: </label>
            <input
            type="text"
            value={newProduit.nom}
            onChange={(e) => setNewProduit({ ...newProduit, nom: e.target.value })}
            />
            <br />
            <label>Prix: </label>
            <input
            type="text"
            value={newProduit.prix}
            onChange={(e) => setNewProduit({ ...newProduit, prix: e.target.value})}
            />
            <br />
            <button onClick={handleAddProduit}>Ajouter</button>
        </div>
    );
};

export default AjouterProduit;