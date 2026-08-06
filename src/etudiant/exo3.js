import React, { useState } from "react";
import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";

export default function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username !== "" && email !== "" && password !== "") {
            setIsSubmitted(true)
            return;
        }
        alert("Tous les champs sont obligatoires.")
    }

    return (
        <div className="container mt-5">
            <fieldset className="w-75 mx-auto mb-3">
                <legend className="text-cnter text-info">Formulaire de creation de compte</legend>
                {
                    isSubmitted ? (
                        <p className="alert alert-success">Compte cree !!!!!!</p>
                    ) : (
                        <form onSubmit={handleSubmit} className="alert alert-danger">
                            <div className="form-group">
                                <label className="form-label">nom et prenom</label>
                                <input type="text" className="form-control" name="name" onChange={(e) => { setUsername(e.target.value) }} value={username} />
                            </div>
                            <div className="form-group">
                                <label className="form-label">email</label>
                                <input type="email" className="form-control" name="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                            </div>
                            <div className="form-group">
                                <label className="form-label">password</label>
                                <input type="password" className="form-control" name="password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Creer un compte" className="btn btn-info fw-bold d-flex mx-auto bt-sm mt-3" />
                            </div>
                        </form>
                    )
                }
            </fieldset>
        </div>
    )
}