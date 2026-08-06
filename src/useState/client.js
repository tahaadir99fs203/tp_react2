import React, { Component, useState } from "react";

export default function Client()
{
    const [nom, setNom] = useState("Valeur initiale");
    const [prenom, setPrenom] = useState("taha");

    const inputChange = (e) =>{
        if(e.target.name=="nom") {
            setNom(e.target.value);
        } else if(e.target.name=="prenom") {
            setPrenom(e.target.value);
        }
    }

    return(
        <div>
            <h1>Test useState</h1>
            <center>
                <table style={{border: "1px solid #000", width: '50%'}}>
                    <tr>
                        <td>Nom</td>
                        <td><input value={nom} onChange={inputChange} name="prenom" type="text"/></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <p style={{background: "#eee"}}>
                                Afficher la valeur du state: <br/>Nom: <b>{nom}</b> <br/> Prenom: <b>{prenom}</b>
                            </p>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
}