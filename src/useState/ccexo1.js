import React, { useState } from "react";

export default function CalculSalaire()
{
    const[nom, setNom] = useState("");
    const[salaire, setSalaire] = useState("");
    const[contrat, setContrat] = useState("");
    const[nbEnfants, setNbEnfants] = useState("");
    const[anciennete, setAnciennete] = useState("");
    const[resultat, setResultat] = useState("");
    const[erreur, setErreur] = useState("");

    const calculerSalaire = (event) => {
        event.preventDefault();
        if(nom.trim()==="" || salaire==="" || contrat==="" || nbEnfants==="" || anciennete==="") {
            setErreur("Veuillez remplir tous les champs");
            setResultat("");
            return;
        }

        let s = parseFloat(salaire);
        let enfants = parseInt(nbEnfants);
        let ans = parseInt(anciennete);
        if(isNaN(s) || s<=0) {
            setErreur("Le salaire doit etre un nombre positif");
            setResultat("");
            return;
        }

        let net = s;
        if(s<2000) {
            net = net - s*0.05;
        } else {
            net = net-s*0.08
        }

        if(contrat==="CDD") {
            net = net+s*0.02;
        } else if(contrat==="Stage") {
            net = net+s*0.05;
        }

        net = net-s*(enfants*0.01);
        if(ans>10) {
            net = net+s*0.03;
        }

        setErreur("");
        setResultat(`Le salaire net de ${nom} est de ${net.toFixed(2)} DH`);
    };

    return(
        <div>
            <form onSubmit={calculerSalaire}>
                <label>Nom: </label>
                <input type="text" value={nom} onChange={(event) => setNom(event.target.value)}/> <br />
                <
                    label>Salaire brut: </label>
                <input type="number" value={salaire} onChange={(event) => setSalaire(event.target.value)}/> <br/>
                
                <label>Type Contrat: </label>
                <select value={contrat} onChange={(event) => setContrat(event.target.value)}>
                    <option value="">-- Choisir --</option>
                    <option value="CDI">CDI</option>
                    <option value="CDD">CDD</option>
                    <option value="Stage">Stage</option>
                </select><br/>

                <label>Nombre Enfants: </label>
                <input type="number" value={nbEnfants} onChange={(event) => setNbEnfants(event.target.value)}/> <br/>

                <label>Anciennete: </label>
                <input type="number" value={anciennete} onChange={(event) => setAnciennete(event.target.value)}/> <br />

                <button type="submit">Calculer</button>
            </form>
            {erreur && <p style={{color: "red"}}>{erreur}</p>}
            {resultat && <p style={{color: "green"}}>{resultat}</p>}
        </div>
    );
}