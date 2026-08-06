import React, { useState } from "react";
import api from "../services/api";

export default function SearchMedia()
{
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const search = async () => {
        const res = await api.get("/medias?q=" + query);
        setResults(res.data);
    };

    return (
        <div>
            <h2>Recherche</h2>
            <input placeholder="Titre..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={search}>Rechercher</button>

            <ul>
                {results.map((m) => (
                    <li key={m.id}>{m.type} : {m.titre}</li>
                ))}
            </ul>
        </div>
    );
}