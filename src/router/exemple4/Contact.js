import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    const retourAaccueil = () => {
        navigate('/');
    }
    return (
        <div>
            <h2>Contactez-nous</h2>
            <button onClick={retourAaccueil}>Aller a l'Accueil</button>
        </div>
    );
}