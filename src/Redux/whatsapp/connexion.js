import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { connexion_Action } from "./actions";

export default function Connexion() {
    const [contact, setContact] = useState({id: '', nom: '', tel: ''})
    const [message, setMessage] = useState("");
    const Dispatch = useDispatch();
    const userConnecte = useSelector((state) => state.userConnecte);
    const [validerClique, setValiderClique] = useState(false);
    const navigate = useNavigate();

    const validerConnexion = () => {
        setMessage("");
        if ((contact.nom != '') && (contact.tel != ''))
        {
            Dispatch(connexion_Action(contact.nom, contact.tel))
        }
        else
        {
            setMessage("Erreur tous les champs sont obligatoires")
        }
        setValiderClique(true)
    }

    useEffect(() => {
        if (validerClique) {
            if (userConnecte.length == 0) {
                setMessage("Erreur login ou password sont incorrects")
            }
            else
            {
                setMessage("bien connecte")
                navigate('/contacts')
            }
        }
    }, [userConnecte])

    return (
        <div>
            <input type="text" placeholder="nom" onChange={(event) => setContact({...contact, nom: event.target.value})} /><br/>
            <input type="tel" placeholder="tel" onChange={(event) => setContact({...contact, tel: event.target.value})} /><br/>
            <input type="button" value="Connexion" onClick={validerConnexion} /><br/>
            {message}
        </div>
    );
}