import { useState } from "react";
import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";

export default function UseStateTableau() {
    const [listeContact, setListeContact] = useState([]);
    const [filter, setFilter] = useState('');
    const [contact, setContact] = useState({
        idContact: 1,
        contact: ''
    })

    const ajouterContact = () => {
        if (contact.contact !== "") {
            setListeContact(prevListContact => (
                [...prevListContact, contact]
            ))

            setContact(prevContact => ({
                idContact: contact.idContact + 1,
                contact: ''
            }))
        } else {
            alert('Tous les champs sont obligatoires')
        }
    }

    const Delete = (contactId) => {
        setListeContact(
            listeContact.filter(contact => {
                if (contact.idContact === contactId) {
                    return false
                }
                return true
            })
        )
    }

    return (
        <div className="container mt-5">
            <fieldset className="w-75 mx-auto mb-3 alert alert-info">
                <legend className="text-center">Ajouter un contact</legend>

                <form>
                    <div className="row">
                        {/* Champ pour entrer un nouveau contact */}
                        <div className="form-group col">
                            <label>Nouveau contact</label>
                            <input
                            type="text" className="form-control" name="contact" onChange={(event) => {
                                setContact(prevContact => ({ ...prevContact, contact: event.target.value }))
                            }}
                            />
                        </div>

                        {/* Champ pour filtrer les contacts par nom */}
                        <div className="form-group col">
                            <label>Filtrer par Nom</label>
                            <input
                            type="text" className="form-group" name="filter" onChange={(event) => { setFilter(event.target.value) }} value={filter} />
                        </div>
                    </div>

                    <div className="form-group">
                        {/* Bouton pour ajouter un contact */}
                        <input
                        type="button" value="Ajouter" className="btn btn-info fw-bold d-flex mx-auto bt-sm mt-3" onClick={ajouterContact} />
                    </div>
                </form>
            </fieldset>

            <h3 className="text-center text-white fw-bold">Liste des contacts</h3>
            <table className="table table-bordered table-sm w-75 mx-auto">
                <thead className="bg-info text-white text-center">
                    <th>Id</th>
                    <th>Contact</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {/* Filtre et affiche les contacts correspondants */}
                    {
                        listeContact.filter((f) => f.contact.includes(filter)).map((C) => {
                            return (
                                <tr>
                                    <td>{C.idContact}</td>
                                    <td>{C.contact}</td>
                                    <td>
                                        <div className="text-center">
                                            {/* Bouton pour supprimer un contact */}
                                            <button className="btn btn-danger btn-sm" onClick={e => { Delete(C.idContact) }}>
                                                Supprimer
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}