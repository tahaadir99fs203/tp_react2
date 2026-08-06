import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AfficherListePosts from "./ListePosts";
import AjouterPost from "./AjouterPosts";
import { useSelector } from "react-redux";
export default function App()
{
    const listePosts = useSelector((state) => state.postReducer.posts)

    return (
        <div>
        <BrowserRouter>
            <Link to="/listePosts">Posts: <input type="button" value={listePosts.length} style={{"background":"blue", "fontSize":"12px", "padding":"2px"}} /></Link>
            <Link to="/ajouterPost">Ajouter Post</Link>
            <Link to="/ajouterAmi">Amis: <input type="button" value="5" style={{"background":"blue", "fontSize":"12px", "padding":"2px"}} /></Link>
            <Routes>
                <Route path="/listePosts" element={<AfficherListePosts />} />
                <Route path="/ajouterPost" element={<AjouterPost />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}