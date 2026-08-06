import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduit } from "./commandeActions";
import { Link } from "react-router-dom";

const ListeCommandes = () => {
    const commandes = useSelector((state) => state.commandes.commandes);
    const dispatch = useDispatch();

    const handleDeleteCommande = (id) => {
        dispatch(deleteProduit(id));
    };

    return (
        <div>
            <h2>Liste des Commandes</h2>
            <ul>
                {commandes.map((commande) => (
                    <li key={commande.id}>
                        Commande #{commande.id} - Client: {commande.client} - Produits: {commandes.listeProduit.join(', ')}
                        <button onClick={() => handleDeleteCommande(commande.id)}>Supprimer</button>
                        <Link to={`/modifier-commande/${commande.id}`}>
                            <button>Modifier</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListeCommandes;