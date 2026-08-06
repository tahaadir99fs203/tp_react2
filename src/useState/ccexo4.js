import React, { useState } from "react";

export default function Inventaire()
{
    const [produits, setProduits] = useState([
        {
            id: 1,
            nom: "Cle USB",
            categorie: "electronique",
            prix: 50,
            quantite: 10,
            seuilAlerte: 5,
            fournisseur: "TechPro"
        },
    ]);

    const [id, setId] = useState("");
    const [nom, setNom] = useState("");
    const [categorie, setCategorie] = useState("electronique");
    const [prix, setPrix] = useState("");
    const [quantite, setQuantite] = useState("");
    const [seuilAlerte, setSeuilAlerte] = useState("");
    const [fournisseur, setFournisseur] = useState("");
    const [search, setSearch] = useState("");
    const [modeEdition, setModeEdition] = useState(false);

    const ajouterProduit = (event) => {
        event.preventDefault();
        if(!nom || !prix || !quantite || !seuilAlerte) {
            alert("Veuillez remplir tous les champs");
            return;
        }
        const nouveauProduit = {
            id: produits.length + 1,
            nom,
            categorie,
            prix: Number(prix),
            quantite: Number(quantite),
            seuilAlerte: Number(seuilAlerte),
            fournisseur
        };

        setProduits([...produits, nouveauProduit]);
        viderFormulaire();
    };

    const supprimerProduit = (id) => {
        if(window.confirm("Voulez-vous supprimer ce produit?")) {
            setProduits(produits.filter((p) => p.id !== id));
        }
    };

    const modifierProduit = (prod) => {
        setModeEdition(true);
        setId(prod.id);
        setNom(prod.nom);
        setCategorie(prod.categorie);
        setPrix(prod.prix);
        setQuantite(prod.quantite);
        setSeuilAlerte(prod.seuilAlerte);
        setFournisseur(prod.fournisseur);
    };

    const enregistrerModification = (event) => {
        event.preventDefault();
        const produitsModifies = produits.map((prod) => {
        if(prod.id === id) {
            return {
                id,
                nom,
                categorie,
                prix: Number(prix),
                quantite: Number(quantite),
                seuilAlerte: Number(seuilAlerte),
                fournisseur
            };
        }
        return prod;
    });

    setProduits(produitsModifies);
    setModeEdition(false);
    viderFormulaire();
    };

    const viderFormulaire = () => {
        setId(null);
        setNom("");
        setCategorie("electronique");
        setPrix("");
        setQuantite("");
        setSeuilAlerte("");
        setFournisseur("");
    };

    const produitsFiltres = produits.filter((prod) =>
        prod.nom.toLowerCase().includes(search.toLowerCase())
    );

    const valeurTotale = produits.reduce(
        (total, prod) => total + prod.prix * prod.quantite,
        0
    );

    const alertes = produits.filter((prod) => prod.quantite <= prod.seuilAlerte);

    return(
        <div>
            <form onSubmit={modeEdition ? enregistrerModification : ajouterProduit}>
                <label>Nom: </label>
                <input value={nom} onChange={(event) => setNom(event.target.value)}/>

                <label>Categorie: </label>
                <select value={categorie} onChange={(event) => setCategorie(event.target.value)}>
                    <option value="electronique">electronique</option>
                    <option value="vetements">vetements</option>
                    <option value="alimentaire">alimentaire</option>
                </select>

                <label>Prix: </label>
                <input type="number" value={prix} onChange={(event) => setPrix(event.target.value)}/>

                <label>Quantite: </label>
                <input type="number" value={quantite} onChange={(event) => setQuantite(event.target.value)}/>

                <label>Seuil d'alerte: </label>
                <input type="number" value={seuilAlerte} onChange={(event) => setSeuilAlerte(event.target.value)}/>

                <label>Fournisseur: </label>
                <input value={fournisseur} onChange={(event) => setFournisseur(event.target.value)}/>

                <button type="submit">
                    {modeEdition ? "Enregistrer" : "Ajouter"}
                </button>
                {modeEdition && (
                    <button type="button" onClick={viderFormulaire}>
                        Annuler
                    </button>
                )}
            </form>

            <div>
                <label>Rechercher: </label>
                <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Nom du produit"/>
            </div>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Categorie</th>
                        <th>Prix</th>
                        <th>Quantite</th>
                        <th>Seuil</th>
                        <th>Fournisseur</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {produitsFiltres.length === 0 ? (
                        <tr>
                            <td colSpan="8">Aucun produit trouve</td>
                        </tr>
                    ) : (
                        produitsFiltres.map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nom}</td>
                                <td>{p.categorie}</td>
                                <td>{p.prix}</td>
                                <td>{p.quantite}</td>
                                <td>{p.seuilAlerte}</td>
                                <td>{p.fournisseur}</td>
                                <td>
                                    <button onClick={() => modifierProduit(p)}>Modifier</button>
                                    <button onClick={() => supprimerProduit(p)}>Supprimer</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <h3>Alerte de stock bas :</h3>
            {alertes.length === 0 ? (
                <p>Aucun alerte</p>
            ) : (
                <ul>
                    {alertes.map((p) => (
                        <li key={p.id}>
                            {p.nom} Quantite: {p.quantite} (Seuil: {p.seuilAlerte})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}