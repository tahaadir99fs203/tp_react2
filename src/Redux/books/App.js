import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AjouterBook from "./AjouterBook";
import ListeBooks from "./ListeBooks";

export default function App()
{
    return (
        <div>
            <Router>
                <Link to="/AjouterBook">Ajouter Book</Link>
                <Link to="/listeBooks">Liste Books</Link>
                <Routes>
                    <Route path="/AjouterBook" element={<AjouterBook />} />
                    <Route path="/listeBooks" element={<ListeBooks />} />
                </Routes>
            </Router>
        </div>
    );
}