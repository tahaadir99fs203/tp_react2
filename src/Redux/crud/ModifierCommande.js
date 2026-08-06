import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCommande } from "./commandeActions";

const ModifierCommande = ({ match, history }) => {
    const commandeId = match.params.id;
    const dispatch = useDispatch();

    const [updatedCommande, setUpdatedCommande] = useState({
        id: '',
        listeProduit: [],
        client: '',
    });

    const clients = useSelector((state) => state.clients.clients);
    const produits = useSelector((state) => state.produits.produits);
    const commandes = useSelector((state) => state.commandes.commandes);

    useEffect(() => {
        const currentCommande = commandes.find((commande) => commande.id === parseInt(commandeId));
        setUpdatedCommande(currentCommande || { id: '', listeProduit: [], client: '' });
    }, [commandeId, commandes]);

    const handleUpdateCommande = () => {
        dispatch(updateCommande(updatedCommande.id, updatedCommande));
        history.push('/liste-commandes');
    };

    return (
        <div>
            <h2>Modifier une Commande</h2>
            <label>Client: </label>
            <select
            value={updatedCommande.client}
            onChange={(e) => setUpdatedCommande({ ...updatedCommande, client: e.target.value })}
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
            value={updatedCommande.listeProduit}
            onChange={(e) => setUpdatedCommande({
                ...updatedCommande,
                listeProduit: Array.from(e.target.selectedOptions, (option) => option.value),
            })}
            >
                {produits.map((produit) => (
                    <option key={produit.id} value={produit.id}>
                        {produit.nom} - Prix: {produit.prix}
                    </option>
                ))}
            </select>
            <br />
            <button onClick={handleUpdateCommande}>Modifier</button>
        </div>
    );
};

export default ModifierCommande;