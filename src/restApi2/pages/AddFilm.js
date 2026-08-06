import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddFilm()
{
    const [titre, setTitre] = useState("");
    const [annee, setAnnee] = useState("");
    const [realisateur, setRealisateur] = useState("");
    const [genre, setGenre]= useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        await api.post("/medias", {
            type: "Film",
            titre,
            annee,
            realisateur,
            genre
        });
        navigate("/");
    };

    return (
        <form onSubmit={submit}>
            <h2>Ajouter un Film</h2>
            
            <input placeholder="Titre" value={titre} onChange={(e) => setTitre(e.target.value)} />
            <input placeholder="Annee" value={annee} onChange={(e) => setAnnee(e.target.value)} />
            <input placeholder="Realisateur" value={realisateur} onChange={(e) => setRealisateur(e.target.value)} />
            <input placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />

            <button type="submit">Ajouter</button>
        </form>
    );
}