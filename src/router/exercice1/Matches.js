import React, { useState } from "react";
import MatchCard from "./MatchCard";

function Matches()
{
    const [matches, setMatches] = useState([
        { id: 1, teamA: "PSG", teamB: "Real Madrid C.F.", score: "2 - 1" }
    ]);

    const [newMatch, setNewMatch] = useState({ teamA: "", teamB: "", score: "" });

    const handleAddMatch = () => {
        if(newMatch.teamA && newMatch.teamB && newMatch.score) {
            setMatches([ ...matches, { id: Date.now(), ...newMatch }]);
            setNewMatch({ teamA: "", teamB: "", score: "" });
        }
    };

    return (
        <div>
            <h3>Gestion des Matchs</h3>

            <input placeholder="Equipe A" value={newMatch.teamA} onChange={(e) => setNewMatch({ ...newMatch, teamA: e.target.value })} />
            <input placeholder="Equipe B" value={newMatch.teamB} onChange={(e) => setNewMatch({ ...newMatch, teamB: e.target.value })} />
            <input placeholder="Score" value={newMatch.score} onChange={(e) => setNewMatch({ ...newMatch, score: e.target.value })} />
            <button onClick={handleAddMatch}>Ajouter</button>

            {matches.map((m) => (
                <MatchCard key={m.id} teamA={m.teamA} teamB={m.teamB} score={m.score} />
            ))}
        </div>
    );
}

export default Matches;