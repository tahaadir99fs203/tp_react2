import { useState } from "react";
import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";

export default function NameForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const updateNameFields = (event) => {
        const { value, name } = event.target
        if (name === "fn") {
            setFirstName(value)
        } else {
            setLastName(value)
        }
    }

    return (
        <>
            <div className="container">
                <div className="w-50 mx-auto mt-5">
                    <form>
                        <div className="form-group">
                            <label htmlFor="" className="form-label h5 text-white mb-3">Saisissez Prenom:</label>
                            <input name="fn" className="form-control" onChange={(event) => { updateNameFields(event) }} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="" className="form-label h5 text-white mb-3">Saisissez Nom:</label>
                            <input name="ln" className="form-control" onChange={(event) => { updateNameFields(event) }} />
                        </div>
                    </form>

                    <div className="alert alert-info mt-5">
                        <p>Prenom: {firstName}</p>
                        <p>Nom: {lastName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}