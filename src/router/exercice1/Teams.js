import React, { useState } from "react";
import TeamCard from "./TeamCard";

function Teams()
{
    const [teams, setTeams] = useState([
        { id: 1, name: "Real Madrid C.F.", country: "Espagne" },
        { id: 2, name: "Wydad Athletic Club", country: "Maroc" }
    ]);

    const [newTeam, setNewTeam] = useState({ name: "", country: "" });

    const handleAdd = () => {
        if (!newTeam.name && newTeam.country) {
            setTeams([...teams, { id: Date.now(), ...newTeam }]);
            setNewTeam({ name: "", country: "" });
        }
    };

    return (
        <div>
            <h3>Gestion des equipes</h3>

            <input placeholder="Nom de l'equipe" value={newTeam.name} onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })} />
            <input placeholder="Pays" value={newTeam.country} onChange={(e) => setNewTeam({ ...newTeam, country: e.target.value })} />
            <button onClick={handleAdd}>Ajouter</button>

            <div>
                {teams.map((t) => (
                    <TeamCard key={t.id} name={t.name} country={t.country} />
                ))}
            </div>
        </div>
    );
}

export default Teams;