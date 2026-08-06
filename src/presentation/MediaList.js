import React from "react";

export default function MediaList({ medias, onDelete })
{
    if (!medias || medias.length === 0) {
        return <p>Aucun media enregistre.</p>;
    }

    return (
        <div>
            <h2>Liste des medias</h2>
            <table border="1" cellPadding="6">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Titre</th>
                        <th>Annee</th>
                        <th>Realisateur / Createur</th>
                        <th>Saisons</th>
                        <th>Episodes</th>
                        <th>Genre</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {medias.map((m, i) => (
                        <tr key={i}>
                            <td>{m.type}</td>
                            <td>{m.titre}</td>
                            <td>{m.annee ?? "N/A"}</td>

                            <td>
                                {m.type === "Film"
                                    ? m.realisateur ?? "_"
                                    : m.type === "Serie"
                                    ? m.createur ?? "_"
                                    : "_"
                                }
                            </td>

                            <td>{m.saisons ?? "_"}</td>
                            <td>{m.episodes ?? "_"}</td>

                            <td>{m.genre ?? "_"}</td>
                            <td>
                                <button onClick={() => onDelete(m.titre)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}