import React from "react";

const Navigation = ({ setPage }) => (
  <div>
    <button onClick={() => setPage("accueil")}>Accueil</button>
    <button onClick={() => setPage("groupes")}>Groupes</button>
    <button onClick={() => setPage("classements")}>Classements</button>
    <button onClick={() => setPage("eliminatoires")}>Éliminatoires</button>
  </div>
);

export default Navigation;