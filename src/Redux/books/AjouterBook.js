import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./actions";

export default function AjouterBook() {
    const [book, setBook] = useState({ id: Date.now(), titre: "" });
    const [message, setMessage] = useState("");
    const Dispatch = useDispatch();

    const addBooks = () => {
        if (book.titre != "")
        {
            Dispatch(addBook(book))
            setMessage("Bien Ajoute")
        }
        else
        {
            setMessage("Erreur non Ajoute")
        }
    };

    return (
        <div>
            titre: <input type="text" name="titre" onChange={(event) => setBook({...book, titre: event.target.value})} />
            <input type="button" onClick={addBooks} value="Add" />
            {message}
        </div>
    );
}