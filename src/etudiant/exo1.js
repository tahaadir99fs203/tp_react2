import React, { useState, useEffect } from "react";
import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";

function LocalStorageExample() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        localStorage.setItem('count', count + 1);
    }

    useEffect(() => {
        const counter = localStorage.getItem('count');
        if (counter) {
            setCount(Number(counter));
        }
    }, []);

    useEffect(() => {
        if (count > 0) {
            localStorage.setItem('count', count);
        }
    }, [count]);

    return (
        <div className="container">
            <h2 className="alert bg-danger text-white text-center w-50 mx-auto mt-5">
                Exemple d'utilisation de useEffect avec localStorage
            </h2>
            <div className="alert alert-primary d-flex justify-content-center align-item-center w-50 mx-auto p-5 mt-5">
                {/* Bouton pour incrementer le compteur */}
                <button onClick={increment} className="btn btn-success btn-sm py-0 fw-bold">
                    Incrementer Count
                </button>
                {/* Affiche la valeur actuelle du compteur */}
                <strong className="p-2 px-4 rounded fw-bold text-white bg-info mx-2">
                    {count}
                </strong>
            </div>
        </div>
    )
}

export default LocalStorageExample;