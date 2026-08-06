import React, { useState } from "react";

const App = () => {
    const [clients, setClients] = useState([
        { id: 1, nom: "Ali" },
        { id: 2, nom: "Sara"}
    ]);
    const [voyages, setVoyages] = useState([
        { id: 1, destination: "Paris" },
        { id: 2, destination: "Marrakech" }
    ]);
}