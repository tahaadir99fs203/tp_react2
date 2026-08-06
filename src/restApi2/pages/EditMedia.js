import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function EditMedia()
{
    const { id } = useParams();
    const navigate = useNavigate();

    const [media, setMedia] = useState({});

    useEffect(() => {
        api.get(`/medias/${id}`).then((res) => setMedia(res.data));
    }, [id]);

    const update = async (e) => {
        e.preventDefault();
        await api.put(`/medias/${id}`, media);
        navigate("/");
    };

    return (
        <form onSubmit={update}>
            <h2>Modifier Media</h2>
            <input value={media.titre || ""} onChange={(e) => setMedia({ ...media, titre: e.target.value})} placeholder="Titre" />
            <input value={media.annee || ""} onChange={(e) => setMedia({ ...media, annee: e.target.value})} placeholder="Annee" />
            <input value={media.realisateur || media.createur || ""} onChange={(e) => setMedia({ ...media, realisateur: media.type === "Film" ? e.target.value : undefined, createur: media.type === "Serie" ? e.target.value : undefined })} placeholder="Realisateur / Createur" />
            <input value={media.saisons || ""} onChange={(e) => setMedia({ ...media, saisons: e.target.value })} placeholder="Saisons" />
            <input value={media.episodes || ""} onChange={(e) => setMedia({ ...media, episodes: e.target.value })} placeholder="Episodes" />
            <input value={media.genre || ""} onChange={(e) => setMedia({ ...media, genre: e.target.value })} placeholder="Genre" />
            <button type="submit">Modifier</button>
        </form>
    );
}