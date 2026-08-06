import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./PostActions";
export default function AjouterPost()
{
    const [post, setPost] = useState({
        id: Date.now(),
        texte: '',
        likes: 0,
        comments: []
    })
    const [message, setMessage] = useState("");
    const Dispatch = useDispatch();

    const ajouterPost = () => {
        if (post.texte != "")
        {
            Dispatch(addPost(post))
            setMessage("Bien ajoute")
            setPost({...post, texte: "", id: Date.now()})
        }
        else
        {
            setMessage("Le texte est obligatoire")
        }
    }

    return (
        <div>
            <textarea name="texte" onChange={(event) => setPost({...post, texte: event.target.value})}>What's on your mind</textarea>
            <br/>
            <input type="button" value="Ajouter" onClick={ajouterPost} />
            {message}
        </div>
    );
}