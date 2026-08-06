import React from "react";

const Pays = (props) => {
    return (
        <div
        style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            margin: "10px auto",
            padding: "10px",
            width: "300px"
        }}
        >
            <h3>{props.nom}</h3>
            <p>Capitale: {props.capital}</p>
        </div>
    );
};

export default Pays;