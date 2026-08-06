import React, { useState } from "react";
import Navigation from "./Navigation";
import Accueil from "./Accueil";
import Groupes from "./Groupes";
import Classements from "./Classements";
import Eliminatoires from "./Elimination";

const App = () => {
  const [page, setPage] = useState("accueil");

  const [equipes] = useState([
    "Argentine","Brésil","France","Maroc",
    "Portugal","Espagne","Allemagne","Angleterre",
    "Pays-Bas","Italie","Croatie","Sénégal",
    "Japon","États-Unis","Suisse","Serbie",
    "Cameroun","Corée du Sud","Mexique","Uruguay",
    "Iran","Qatar","Arabie Saoudite","Pologne",
    "Australie","Tunisie","Ghana","Canada",
    "Costa Rica","Danemark","Belgique","Équateur"
  ]);

  const groupes = "ABCDEFGH".split("").map((lettre, i) => ({
    nom: `Groupe ${lettre}`,
    equipes: equipes.slice(i*4, i*4 + 4)
  }));

  const [scores, setScores] = useState({});

  const enregistrerScore = (groupe, matchKey, score) => {
    setScores({...scores, [groupe]: {...(scores[groupe]||{}), [matchKey]: score}});
  };

  return (
    <div>
      <h1>Gestion Coupe du Monde</h1>
      <Navigation setPage={setPage} />

      {page === "accueil" && <Accueil equipes={equipes} />}
      {page === "groupes" && <Groupes groupes={groupes} scores={scores} enregistrerScore={enregistrerScore} />}
      {page === "classements" && <Classements classements={groupes.reduce((acc, g) => ({...acc, [g.nom]: g.equipes.map(e=>({nom:e, pts:0}))}), {})} />}
      {page === "eliminatoires" && <Eliminatoires qualifies={equipes.slice(0,16)} />}
    </div>
  );
};

export default App;