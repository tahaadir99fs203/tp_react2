import React from "react";
import Pays from "./Pays";

const ListPays = () => {
    const pays = [
        { nom: "Maroc", capital: "Rabat" },
        { nom: "France", capital: "Paris" },
        { nom: "Etats-Unis", capital: "Washington D.C."}
    ];

    return (
        <div>
            {pays.map((p, index) => (
                <Pays key={index} nom={p.nom} capital={p.capital} />
            ))}
        </div>
    );
};

export default ListPays;