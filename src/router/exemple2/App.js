import React from "react";
import { BrowserRouter as Router, Route, Link, useParams, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/user/john">Profil de John</Link></li>
                        <li><Link to="/user/jane">Profil de Jane</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/user/:username" element={<UserProfile />} />
                </Routes>
            </div>
        </Router>
    );
}