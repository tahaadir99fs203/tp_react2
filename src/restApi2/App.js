import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddFilm from "./pages/AddFilm";
import AddSerie from "./pages/AddSerie";
import EditMedia from "./pages/EditMedia";
import SearchMedia from "./pages/SearchMedia";

export default function App()
{
    return (
        <Router>
            <nav>
                <Link to="/">Accueil</Link> | {" "}
                <Link to="/add-film">Ajouter Film</Link> | {" "}
                <Link to="/add-serie">Ajouter Serie</Link> | {" "}
                <Link to="/search">Rechercher</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-film" element={<AddFilm />} />
                <Route path="/add-serie" element={<AddSerie />} />
                <Route path="/edit/:id" element={<EditMedia />} />
                <Route path="/search" element={<SearchMedia />} />
            </Routes>
        </Router>
    );
}