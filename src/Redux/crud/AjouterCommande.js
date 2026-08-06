import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommande } from "./commandeActions";

const AjouterCommande = () => {
    const dispatch = useDispatch();
    const [newCommande, setNewCommande] = useState({ id: '', listeProduit: [], client: '' });

    const clients = useSelector((state) => state.clients.clients);
    const produits = useSelector((state) => state.produits.produits);

    const handleAddCommande = () => {
        dispatch(addCommande(newCommande));
        setNewCommande({ id: '', listeProduit: [], client: '' });
    };

    return (
        <div>
            <h2>Ajouter une Commande</h2>
            <label>Client: </label>
            <select
            value={newCommande.client}
            onChange={(e) => setNewCommande({ ...newCommande, client: e.target.value })}
            >
                <option value="">Selectionner un client</option>
                {clients.map((client) => (
                    <option key={client.id} value={client.id}>
                        {client.nom}
                    </option>
                ))}
            </select>
            <br />
            <label>Produits: </label>
            <select
            multiple
            value={newCommande.listeProduit}
            onChange={(e) => setNewCommande({ ...newCommande, listeProduit: Array.from(e.target.selectedOptions, (option) => option.value) })}
            >
                {produits.map((produit) => (
                    <option key={produit.id} value={produit.id}>
                        {produit.nom} - Prix: {produit.prix}
                    </option>
                ))}
            </select>
            <br />
            <button onClick={handleAddCommande}>Ajouter</button>
        </div>
    );
};

export default AjouterCommande;