import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduit } from "./produitActions";

const AfficherListeProduits = ({ onEdit }) => {
    const produits = useSelector((state) => state.produits.produits);
    const dispatch = useDispatch();

    const handleDeleteProduit = (id) => {
        dispatch(deleteProduit(id));
    };

    return (
        <div>
            <h2>Liste des Produits</h2>
            <ul>
                {produits.map((produit) => (
                    <li key={produit.id}>
                        {produit.nom} - Prix: {produit.prix}
                        <button onClick={() => onEdit(produit.id, produit.nom)}>Modifier</button>
                        <button onClick={() => handleDeleteProduit(produit.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AfficherListeProduits;