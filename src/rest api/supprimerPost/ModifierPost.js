import axios from "axios";
import React, { Component, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ModifierPost()
{
    const location = useLocation();
    const [post, setPost] = useState(location.state.post);
    const navigate = useNavigate();

    const getValue = (e) => {
        setPost(prevPost => ({
            ...prevPost,
            [e.target.name]:e.target.value
        }))
    }

    const valider = () => {
        if (post.id != "" && post.title != "" && post.author!= "")
        {
            axios.put("http://localhost:3004/posts/"+post.id, post).then((res) => {
                if (res.status == 200)
                {
                    navigate("/posts")
                }
            })
        }
        else
        {
            alert("Erreur: tout les champs sont obligatoires")
        }
    }

    return (
        <div>
            <div>
                <fieldset>
                    <legend>Add new Post</legend>
                    <table>
                        <tr>
                            <td>ID</td>
                            <td><input type="number" name="id" defaultValue={post.id} disabled /></td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td><input type="text" name="title" onChange={getValue} defaultValue={post.title} /></td>
                        </tr>
                        <tr>
                            <td>Author</td>
                            <td><input type="text" name="author" onChange={getValue} defaultValue={post.author} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="button" value="Valider" onClick={valider} /></td>
                        </tr>
                    </table>
                </fieldset>
            </div>
        </div>
    );
}