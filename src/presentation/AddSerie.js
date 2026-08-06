import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddSerie({ onAdd })
{
    const [titre, setTitre] = useState("");
    const [saisons, setSaisons] = useState("");
    const [episodes, setEpisodes] = useState("");
    const [createur, setCreateur] = useState("");
    const [genre, setGenre] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const serie = {
            type: "Serie",
            titre,
            annee: "N/A",
            saisons,
            episodes,
            createur,
            genre
        };
        onAdd(serie);
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter une Serie TV</h2>
            <input placeholder="Titre" value={titre} onChange={(e) => setTitre(e.target.value)} />
            <input placeholder="Saisons" value={saisons} onChange={(e) => setSaisons(e.target.value)} />
            <input placeholder="Episodes" value={episodes} onChange={(e) => setEpisodes(e.target.value)} />
            <input placeholder="Createur" value={createur} onChange={(e) => setCreateur(e.target.value)} />
            <input placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <button type="submit">Ajouter</button>
        </form>
    );
}