import React from "react";

const Classements = ({ classements }) => {
  return (
    <div>
      <h2>Classements par Groupe</h2>
      {Object.entries(classements).map(([groupe, tableau]) => (
        <div key={groupe}>
          <h3>{groupe}</h3>
          <ul>
            {tableau.map((eq) => (
              <li key={eq.nom}>{eq.nom} : {eq.pts} pts</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Classements;