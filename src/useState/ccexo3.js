import React, { useState } from "react";

export default function Reservation()
{
    const[typeChambre, setTypeChambre] = useState("");
    const[nbNuits, setNbNuits] = useState("");
    const[nbPersonnes, setNbPersonnes] = useState("");
    const[vip, setVip] = useState(false);
    const[petitDejeuner, setPetitDejeuner] = useState(false);
    const[spa, setSpa] = useState(false);
    const[total, setTotal] = useState(null);
    const[erreur, setErreur] = useState("");

    const calculerTotal = () => {
        if(!typeChambre || nbNuits<=0 || nbPersonnes<=0) {
            setErreur("Veuillez remplir tous les champs");
            setTotal(null);
            return;
        }

        setErreur("");

        let prixNuit = 0;
        if(typeChambre==="simple") {
            prixNuit = 80; 
        } else if(typeChambre==="double") {
            prixNuit = 120;
        } else if(typeChambre==="suite") {
            prixNuit = 200;
        }

        let montant = prixNuit*nbNuits;
        if(petitDejeuner) {
            montant = montant + 15*nbPersonnes*nbNuits;
        }
        if(spa) {
            montant = montant + 50*nbNuits;
        }

        if(nbNuits>5) {
            montant = montant*0.9;
        }
        if(vip) {
            montant = montant*0.95;
        }

        setTotal(montant.toFixed(2));
    };

    return(
        <div>
            <div>
                <label>Type Chambre: </label>
                <select value={typeChambre} onChange={(event) => setTypeChambre(event.target.value)}>
                    <option value="">-- Choisir --</option>
                    <option value="simple">Simple</option>
                    <option value="double">Double</option>
                    <option value="suite">Suite</option>
                </select>
            </div>

            <div>
                <label>Nombre de nuits: </label>
                <input type="number" value={nbNuits} onChange={(event) => setNbNuits(event.target.value)}/>
            </div>
            <div>
                <label>Nombre de personnes: </label>
                <input type="number" value={nbPersonnes} onChange={(event) => setNbPersonnes(event.target.value)}/>/
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={vip} onChange={(event) => setVip(event.target.checked)}/>
                    Client VIP (-5%)
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={petitDejeuner} onChange={(event) => setPetitDejeuner(event.target.checked)}/>
                    Petit-dejeuner (15DH/personne/nuit)
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={spa} onChange={(event) => setSpa(event.target.checked)}/>
                    Spa (50DH/nuit)
                </label>
            </div>

            <button onClick={calculerTotal}>Calculer le total</button>
            {erreur && <p style={{color: "red"}}>{erreur}</p>}

            {total && (
                <div>
                    <p>Type de chambre: {typeChambre}</p>
                    <p>Nombre de nuits: {nbNuits}</p>
                    <p>Nombre de personnes: {nbPersonnes}</p>
                    <p>VIP: {vip ? "Oui" : "Non"}</p>
                    <h4>Montant total: {total} DH</h4>
                </div>
            )}
        </div>
    );
}