import React, { useState } from "react";
import PlayerCard from "./PlayerCard";

function Players()
{
    const [players, setPlayers] = useState([
        { id: 1, name: "Kylian Mbappe", goals: 30, assists: 12 },
        { id: 2, name: "Zouhair ElMoutaraji", goals: 7, assists: 5 }
    ]);

    const [newPlayer, setNewPlayer] = useState({ name: "", goals: "", assists: "" });

    const handleAddPlayer = () => {
        if (newPlayer.name) {
            setPlayers([
                ...players,
                { id: Date.now(), ...newPlayer, goals: Number(newPlayer.goals), assists: Number(newPlayer.assists) }
            ]);
            setNewPlayer({ name: "", goals: "", assists: "" });
        }
    };

    return (
        <div>
            <h3>Gestion des Joueurs</h3>
            <input placeholder="Nom du joueur" value={newPlayer.name} onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })} />
            <input placeholder="Buts" value={newPlayer.goals} onChange={(e) => setNewPlayer({ ...newPlayer, goals: e.target.value })} />
            <input placeholder="Passes decisives" value={newPlayer.assists} onChange={(e) => setNewPlayer({ ...newPlayer, assists: e.target.value })} />
            <button onClick={handleAddPlayer}>Ajouter</button>

            {players.map((p) => (
                <PlayerCard key={p.id} name={p.name} goals={p.goals} assists={p.assists} />
            ))}
        </div>
    );
}

export default Players;