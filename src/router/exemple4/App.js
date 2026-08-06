import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, Navigate, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/about">A Propos</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                    <Route path="/404" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;