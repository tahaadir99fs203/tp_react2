import React, { useState } from "react";

export default function SearchMedia({ medias })
{
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        const res = medias.filter((m) =>
            m.titre.toLowerCase().includes(query.toLowerCase())
        );
        setResults(res);
    };

    return (
        <div>
            <h2>Rechercher un Media</h2>
            <input placeholder="Titre a rechercher" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Rechercher</button>

            {results.length > 0 ? (
                <ul>
                    {results.map((m, i) => (
                        <li key={i}>
                            {m.type} : {m.titre} ({m.annee})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun resultat.</p>
            )}
        </div>
    );
}