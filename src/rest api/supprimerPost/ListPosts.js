import axios from "axios";
import React, { Component, useDebugValue, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListPosts()
{
    const navigate = useNavigate();
    const [listePosts, setListePosts] = useState([{}]);
    const [errorSupprimer, setErrorSupprimer] = useState("");
    useEffect(() => {
        axios.get("http://localhost:3004/posts").then((res) => {
            setListePosts(res.data)
        })
    }, []);

    const supprimer = (id) => {
        axios.delete("http://localhost:3004/posts"+id).then((res) => {
            if (res.status == 200)
            {
                const listReste = listePosts.filter(item => (item.id != id))
                setListePosts(listReste);
            }
            else
            {
                setErrorSupprimer("<span style='color: red'>Erreur de suppression</span>");
            }
        })
    }

    const modifier = (post) => {
        navigate("/posts/modifier/", {state: {post:post}})
    }

    return (
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                </thead>
                <tbody>
                    {listePosts.map((post) => {
                        return (
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                                <td>
                                    <button onClick={() => {supprimer(post.id)}}>Supprimer</button>
                                </td>
                                <td>
                                    <button onClick={() => modifier(post)}>Modifier</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {errorSupprimer}
        </div>
    );
}