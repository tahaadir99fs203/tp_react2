import React from "react";

const Accueil = ({ equipes }) => (
  <div>
    <h2>Accueil</h2>
    <p>Il y a {equipes.length} équipes en compétition.</p>
    <ul>
      {equipes.map((equipe, i) => (
        <li key={i}>{equipe}</li>
      ))}
    </ul>
  </div>
);

export default Accueil;