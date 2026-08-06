import React from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import ListPosts from "./ListPosts";
import AddPost from "./addPost";
import ModifierPost from "./ModifierPost";

function App(props)
{
    return (
        <div>
            <table>
                <tr>
                    <td><a href="/posts">Listes Post</a></td>
                    <td><a href="/posts/add">Ajouter nouveau posts</a></td>
                    <td><a href="/comments">Liste Commentaires</a></td>
                    <td><a href="/comments/add">Ajouter un nouveau commentaire</a></td>
                </tr>
            </table>
            <Routes>
                <Route path="/posts" element={<ListPosts />} />
                <Route path="/posts/add" element={<AddPost />} />
                <Route path="/posts/modifier" element={<ModifierPost />} />
            </Routes>
        </div>
    );
}

export default App;