import axios from "axios";
import React, { Component, useState } from "react";

function AddPost()
{
    const [post, setPost] = useState({id: 0, title: '', author: ''});
    const [message, setMessage] = useState();
    const [erreurStyle, setErreurStyle] = useState({"background": "#000", "color": "#fff"});

    const getValue = (e) => {
        setPost(prevPost => ({
            ...prevPost,
            [e.target.name]:e.target.getValue
        }))
    }

    const add = () => {
        if (post.id != '' && post.title != '' && post.author != '')
        {
            axios.post("http://localhost:3004/posts", post).then((res) => {
                if (res.status == 201)
                {
                    setMessage("bien ajouter")
                    setErreurStyle({"background": "#000", "color": "#fff"})
                }
                else
                {
                    setMessage("Erreur du BackEnd")
                    setErreurStyle({"background": "red", "color": "#fff"})
                }
            })
        }
        else
        {
            setMessage("Erreur tous les champs sont obligatoires")
            setErreurStyle({"background": "red", "color": "#fff"})
        }
    }

    return (
        <div>
            <fieldset>
                <legend>Add new post</legend>
                <table>
                    <tr>
                        <td>ID</td>
                        <td><input type="number" name="id" onChange={getValue}></input></td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td><input type="text" name="title" onChange={getValue} /></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="author" onChange={getValue} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" onClick={add} value="Save" /></td>
                    </tr>
                </table>
                <span style={erreurStyle}> {message}</span>
            </fieldset>
        </div>
    );
}

export default AddPost;