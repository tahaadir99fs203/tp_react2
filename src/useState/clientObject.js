import React, { Component, useState } from "react";

export default function ClientObject()
{
    const[client, setClient] = useState({ nom: "", prenom: "" });
    const inputChange = e =>{
        const{name, value} = e.target;
        setClient(prevClient => ({
            ...prevClient,
            [name]: value
        }));
    };

    return(
        <div>
            <input value={client.nom} onChange={inputChange} name="nom" type="text" /><br />
            <input value={client.prenom} onChange={inputChange} name="prenom" type="text" />
            <p>
                Afficher la valeur du state :
                <span style={{background:'#efefef'}}>
                    <br/>Nom: <b>{client.nom}</b>
                    <br/>Prenom: <b>{client.prenom}</b>
                </span>
            </p>
        </div>
    );
}