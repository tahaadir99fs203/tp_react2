import React, { useState } from "react";

export default function App()
{
    const [equipements, setEquipements] = useState([
        {
            id: 1,
            nom: "Ordinateur portable",
            type: "Informatique",
            marque: "Dell",
            dateAchat: "2022-01-15",
            valeurAchat: 1200,
            etat: "Bon etat",
            dureeVie: 3,
            dateDernierMaintenance: "2024-01-10"
        },
        {
            id: 2,
            nom: "Imprimante laser",
            type: "Bureautique",
            marque: "HP",
            dateAchat: "2020-03-10",
            valeurAchat: 350,
            etat: "Etat moyen",
            dureeVie: 5,
            dateDernierMaintenance: "2023-06-01"
        }
    ]);
    const [formData, setFormData] = useState({
        id: null,
        nom: "",
        type: "",
        marque: "",
        dateAchat: "",
        valeurAchat: "",
        etat: "",
        dureeVie: "",
        dateDernierMaintenance: ""
    });
    const [recherche, setRecherche] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleAdd = () => {
        if(!formData.nom || !formData.type) {
            alert("Veuillez remplir les champs obligatoires");
            return;
        }
        const newEquipement = {...formData, id: Date.now()};
        setEquipements([...equipements, newEquipement]);
        resetForm(); 
    };

    const handleEdit = (id) => {
        const eq = equipements.find((item) => item.id === id);
        setFormData(eq);
        setIsEditing(true);
    };

    const handleUpdate = () => {
        const updated = equipements.map((item) =>
            item.id === formData.id ? formData : item
        );
        setEquipements(updated);
        setIsEditing(false);
        resetForm();
    };

    const handleDelete = (id) => {
        if(window.confirm("Voulez-vous supprimer cet equipement ?")) {
            setEquipements(equipements.filter((eq) => eq.id !== id));
        }
    };

    const resetForm = () => {
        setFormData({
            id: null,
            nom: "",
            type: "",
            marque: "",
            dateAchat: "",
            valeurAchat: "",
            etat: "",
            dureeVie: "",
            dateDernierMaintenance: ""
        });
    };

    const rechercheEquipements = equipements.filter(
        (eq) =>
            eq.nom.toLowerCase().includes(recherche.toLowerCase()) ||
            eq.type.toLowerCase().includes(recherche.toLowerCase()) ||
            eq.etat.toLowerCase().includes(recherche.toLowerCase())
    );

    const totalValeur = equipements.reduce(
        (somme, eq) => somme + Number(eq.valeurAchat),
        0
    );
    const nbTypes = [...new Set(equipements.map((eq) => eq.type))].length;
    const aSurveiller = equipements.filter(
        (eq) => 
            eq.etat.toLowerCase().includes("moyen") ||
            eq.etat.toLowerCase().includes("mauvais")
    ).length;

    return(
        <div>
            <h2>Application CRUD Equipemets</h2>
            <input type="text" placeholder="Recherche" value={recherche} onChange={(e) => setRecherche(e.target.value)}/>

            <div>
                <input name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange}/>
                <input name="type" placeholder="Type" value={formData.type} onChange={handleChange}/>
                <input name="marque" placeholder="Marque" value={formData.marque} onChange={handleChange}/>
                <input type="date" name="dateAchat" value={formData.dateAchat} onChange={handleChange}/>
                <input type="number" name="valeurAchat" placeholder="Valeur (€)" value={formData.valeurAchat} onChange={handleChange}/>
                <input name="etat"
            </div>
        </div>
    )
}