import React, { useState } from "react";

export default function App()
{
    const [nom, setNom] = useState("");
    const [typeClient, setTypeClient] = useState("");
    const [consommation, setConsommation] = useState("");
    const [ancienClient, setAncienClient] = useState(false);
    const [optionWeekend, setOptionWeekend] = useState(false);
    const [periode, setPeriode] = useState("mensuel");
    const [facture, setFacture] = useState(null);
    const [erreur, setErreur] = useState("");

    const calculerFacture = () => {
        if(nom.trim() === "" || consommation === "" || isNaN(consommation) || consommation <= 0) {
            setErreur("Veuillez saisir correctement le nom et la consommation");
            setFacture(null);
            return;
        }

        setErreur("");

        let tarif = 0;
        if(typeClient === "particulier") tarif = 0.15;
        else if(typeClient === "professionnel") tarif = 0.12;
        if(consommation > 1000) tarif -= 0.02;

        let montantHT = consommation * tarif;
        if(optionWeekend) montantHT *= 1.05;
        if(ancienClient) montantHT *= 0.97;
        const montantTTC = montantHT * 1.2;

        setFacture({
            nom,
            typeClient,
            consommation,
            ancienClient,
            optionWeekend,
            periode,
            montantHT: montantHT.toFixed(2),
            montantTTC: montantTTC.toFixed(2)
        });
    };

    const reinitialiser = () => {
        setNom("");
        setTypeClient("particulier");
        setConsommation("");
        setAncienClient(false);
        setOptionWeekend(false);
        setPeriode("mensuel");
        setFacture(null);
        setErreur("");
    };

    return(
        <div>
            <div>
                <label>Nom du client: </label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Entrez le nom du client"/>
            </div>

            <div>
                <label>Type de client: </label>
                <select value={typeClient} onChange={(e) => setTypeClient(e.target.value)}>
                    <option value="particulier">Particulier - 0.15€</option>
                    <option value="professionnel">Professionnel - 0.12€</option>
                </select>
            </div>

            <div>
                <label>Consommation (kWh): </label>
                <input type="number" value={consommation} onChange={(e) => setConsommation(e.target.value)} placeholder="Entrez la comsommation"/>
            </div>

            <div>
                <label>
                    <input type="checkbox" checked={ancienClient} onChange={(e) => setAncienClient(e.target.checked)}/> {" "} Ancien client
                </label>
            </div>

            <div>
                <label>
                    <input type="checkbox" checked={optionWeekend} onChange={(e) => setOptionWeekend(e.target.checked)}/> {" "} Option week-end (chauffage electrique)
                </label>
            </div>

            <div>
                <label>Periode de facturation: </label>
                <select value={periode} onChange={(e) => setPeriode(e.target.value)}>
                    <option value="mensuel">Mensuel</option>
                    <option value="trimestriel">Trimestriel</option>
                    <option value="annuel">Annuel</option>
                </select>
            </div>

            <div>
                <button onClick={calculerFacture}>Calculer Facture</button>
                <button onClick={reinitialiser}>Reinitialiser</button>
            </div>

            {erreur && <p style={{color: "red"}}>{erreur}</p>}
            {facture && (
                <div>
                    <h3>Details de la facture</h3>
                    <p><strong>Nom: </strong> {facture.nom}</p>
                    <p><strong>Type de client: </strong> {facture.typeClient}</p>
                    <p><strong>Consommation: </strong> {facture.consommation} kWh</p>
                    <p><strong>Periode: </strong> {facture.periode}</p>
                    <p><strong>Montant HT: </strong> {facture.montantHT}€</p>
                    <p><strong>Montant TTC: </strong> {facture.montantTTC}€</p>
                </div>
            )}
        </div>
    );
}