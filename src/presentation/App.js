import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MediaList from './MediaList';
import AddFilm from './AddFilm';
import AddSerie from "./AddSerie";
import SearchMedia from "./SearchMedia";

export default function App()
{
    const [medias, setMedias] = useState([]);

    const addMedia = (media) => {
        setMedias([...medias, media]);
    }

    const deleteMedia = (titre) => {
        setMedias(medias.filter((m) => m.titre.toLowerCase() !== titre.toLowerCase()));
    };

    return (
        <Router>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/add-film">Ajouter Film</Link>
                <Link to="/add-serie">Ajouter Serie</Link>
                <Link to="/search">Rechercher</Link>
            </nav>

            <Routes>
                <Route path="/" element={<MediaList medias={medias} onDelete={deleteMedia} />} />
                <Route path="/add-film" element={<AddFilm onAdd={addMedia} />} />
                <Route path="/add-serie" element={<AddSerie onAdd={addMedia} />} />
                <Route path="/search" element={<SearchMedia medias={medias} />} />
            </Routes>
        </Router>
    );
}