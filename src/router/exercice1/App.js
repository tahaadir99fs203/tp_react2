import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import Teams from "./Teams";
import Players from "./Players";
import Matches from "./Matches";

function App()
{
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/teams" element={<Teams />} />
                <Route path="/players" element={<Players />} />
                <Route path="/matches" element={<Matches />} />
            </Routes>
        </Router>
    );
}

export default App;