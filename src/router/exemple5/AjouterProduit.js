import React from "react";
import { useLocation } from "react-router-dom";
export default function AjouterProduit() {
  //useLocation :permet de récupérer les données envoyées  par navigate dans l'objet state
  const location=useLocation();
  return (
    <div style={{background:'yellow'}}>
      <h1>{JSON.stringify(location.state?.data)}</h1>
     <span style={{color:"#000"}}>Ici La component ajouter Produit</span>

    </div>
  )
}