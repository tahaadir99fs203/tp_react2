import React from "react";
import { Link } from "react-router-dom";

export default function MediaTable({ medias, onDelete })
{
    return (
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
                {medias.map((m) => (
                    <tr key={m.id}>
                        <td>{m.type}</td>
                        <td>{m.titre}</td>
                        <td>{m.annee}</td>
                        <td>{m.realisateur || m.createur || "_"}</td>
                        <td>{m.saisons || "_"}</td>
                        <td>{m.episodes || "_"}</td>
                        <td>{m.genre}</td>
                        <td>
                            <Link to={`/edit/${m.id}`}>Modifier</Link>
                            <button onClick={() => onDelete(m.id)}>Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}