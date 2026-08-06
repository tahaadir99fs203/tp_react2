import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AjouterProjet() {
    const [projet, setProjet] = useState({
        id: 1,
        nom: "",
        dateDebut: "",
        dateFin: "",   
        description: "",
    });
    
    return (
        <form>
            <input type="text" value={projet.nom} onChange={(e) => setProjet(e.target.value)} />
            <input type="date" value={projet.dateDebut} 
        </form>
    )
}