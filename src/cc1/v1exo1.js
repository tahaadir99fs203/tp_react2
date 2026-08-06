import React, { useState } from "react";

export default function App()
{
  const [nomClient, setNomClient] = useState("");
  const [typeCommande, setTypeCommande] = useState("Sur place");
  const [plats, setPlats] = useState([]);
  const [boissons, setBoissons] = useState([]);
  const [clientHabituel, setClientHabituel] = useState(false);
  const [nbPersonnes, setNbPersonnes] = useState(1);
  const [total, setTotal] = useState(0);
  const [erreur, setErreur] = useState("");

  const listePlats =  [
    { nom: "Menu du jour", prix: 15 },
    { nom: "Burger", prix: 12 },
    { nom: "Salade", prix: 10 },
    { nom: "Pates", prix: 14 }
  ];
  const listeBoissons = [
    { nom: "Eau", prix: 2 },
    { nom: "Soda", prix: 3 },
    { nom: "Vin", prix: 5 }
  ];

  const handlePlatChange = (e) => {
    const options = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setPlats(options);
  };
  const handleBoissonChange = (e) => {
    const options = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setBoissons(options);
  };

  const calculerCommande = () => {
    if(!nomClient) {
      setErreur("Veuillez entrer le nom du client");
      return;
    }

    if(plats.length === 0) {
      setErreur("Veuillez choisir au moins un plat");
      return;
    }

    let totalCommande = 0;
    plats.forEach((p) => {
      const platTrouve = listePlats.find((x) => x.nom === p);
      if(platTrouve) totalCommande += platTrouve.prix;
    });
    boissons.forEach((b) => {
      const boissonTrouve = listeBoissons.find((x) => x.nom === b);
      if(boissonTrouve) totalCommande += boissonTrouve.prix;
    });

    if(totalCommande > 50) {
      setErreur("Commnde superieure a 50 euros: Service gratuit");
    } else if(totalCommande > 5) {
      totalCommande *= 1.1;
    }

    if(typeCommande === "Livraison") {
      totalCommande += 3;
    }

    if(clientHabituel) {
      totalCommande *= 0.97;
    }

    totalCommande *= nbPersonnes;
    setTotal(totalCommande);
    setErreur("Calcul effectue avec succes");
  };

  const reinitialiser = () => {
    setNomClient("");
    setTypeCommande("Sur place");
    setPlats([]);
    setBoissons([]);
    setClientHabituel(false);
    setNbPersonnes(1);
    setTotal(0);
    setErreur("");
  };

  return(
    <div>
      <label>Nom du client: </label>
      <input type="text" value={nomClient} onChange={(e) => setNomClient(e.target.value)}/>
      <br/><br/>

      <label>Type de commande: </label>
      <select value={typeCommande} onChange={(e) => setTypeCommande(e.target.value)}>
        <option>Sur place</option>
        <option>Livraison</option>
      </select>
      <br/><br/>

      <label>Plats: </label>
      <select multiple value={plats} onChange={handlePlatChange}>
        {listePlats.map((p) => (
          <option key={p.nom}>{p.nom}</option>
        ))}
      </select>
      <br/><br/>

      <label>Boissons: </label>
      <select multiple value={boissons} onChange={handleBoissonChange}>
        {listeBoissons.map((b) => (
          <option key={b.nom}>{b.nom}</option>
        ))}
      </select>
      <br/><br/>

      <label>
        <input type="checkbox" checked={clientHabituel} onChange={(e) => setClientHabituel(e.target.checked)}/>
        Client habituel
      </label> <br/><br/>

      <label>Nombre de personnes: </label>
      <input type="number" min="1" value={nbPersonnes} onChange={(e) => setNbPersonnes(Number(e.target.value))}/>
      <br/><br/>

      <button onClick={calculerCommande}>Calculer Commande</button>
      <button onClick={reinitialiser}>Reinitialiser</button>

      <h3>Total: {total.toFixed(2)}€</h3>
      <p>{erreur}</p>
    </div>
  );
}