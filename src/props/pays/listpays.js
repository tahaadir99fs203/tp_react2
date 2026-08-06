import React, { Component } from "react";
import PaysInfo from "./paysinfo";

export default class ListPays extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const countries = [
            { nom: "Maroc", capital: "Rabat "},
            { nom: "France", capital: "Paris" },
            { nom: "Etats-Unis d'Amerique", capital: "Washington D.C." }
        ];

        return (
            <div>
                <h1>Liste des pays</h1>
                {countries.map((pays, index) => (
                    <div>
                        <PaysInfo key={index} pays={pays} />
                    </div>
                    
                ))}
            </div>
        );
    }
}