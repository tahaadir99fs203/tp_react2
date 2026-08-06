import React, { useState } from "react";

const Groupes = ({ groupes, scores, enregistrerScore }) => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [score, setScore] = useState("");
  const [groupeSelect, setGroupeSelect] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (team1 && team2 && score && groupeSelect) {
      const key = `${team1}-${team2}`;
      enregistrerScore(groupeSelect, key, score);
      setTeam1(""); setTeam2(""); setScore("");
    }
  };

  return (
    <div>
      <h2>Phase de Groupes</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setGroupeSelect(e.target.value)}>
          <option value="">Choisir un groupe</option>
          {groupes.map((g) => (
            <option key={g.nom}>{g.nom}</option>
          ))}
        </select>
        <input value={team1} onChange={(e)=>setTeam1(e.target.value)} placeholder="Équipe 1"/>
        <input value={team2} onChange={(e)=>setTeam2(e.target.value)} placeholder="Équipe 2"/>
        <input value={score} onChange={(e)=>setScore(e.target.value)} placeholder="Score ex: 2-1"/>
        <button type="submit">Enregistrer</button>
      </form>

      {groupes.map((groupe) => (
        <div key={groupe.nom}>
          <h3>{groupe.nom}</h3>
          <ul>{groupe.equipes.map((e)=> <li key={e}>{e}</li>)}</ul>
          <p>Matchs enregistrés :</p>
          <ul>
            {scores[groupe.nom] &&
              Object.entries(scores[groupe.nom]).map(([k, s]) => <li key={k}>{k} → {s}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Groupes;