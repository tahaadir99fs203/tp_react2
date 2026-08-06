import React, { useState } from "react";

export default function SuiviDepenses()
{
    const [depenses, setDepenses] = useState([]);
    const [formData, setFormData] = useState({
        categorie: "",
        montant: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const ajouterDepense = (e) => {
        e.preventDefault();
        if(formData.categorie === "" || formData.montant === "") {
            alert("Veuillez remplir tous les champs!");
            return;
        }
        const nouvelleDepense = {
            id: Date.now(),
            categorie: formData.categorie,
            montant: parseFloat(formData.montant)
        };
        setDepenses([...depenses, nouvelleDepense]);

        setFormData({
            categorie: "",
            montant: ""
        });
    };

    const total = depenses.reduce((somme, d) => somme + d.montant, 0);

    return(
        <div>
            <form onSubmit={ajouterDepense}>
                <label>Categorie: </label>
                <input type="text" name="categorie" value={formData.categorie} onChange={handleChange}/>

                <label>Montant (DH): </label>
                <input type="number" name="montant" value={formData.montant} onChange={handleChange}/>

                <button type="submit">Ajouter</button>
            </form>

            <ul>
                {depenses.map((dep) => (
                    <li key={dep.id}>
                        <strong>{dep.categorie}</strong>
                    </li>
                ))}
            </ul>

            <h3>Total depense: {total} DH</h3>
        </div>
    )
}