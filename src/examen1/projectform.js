import React, { useState } from "react";

export default function ProjectForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("todo");

    const submit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onSubmit({ title: title.trim(), status });
        setTitle("");
        setStatus("todo");
    };

    return (
        <form onSubmit={submit}>
            <div>
                <label>Titre</label><br />
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div style={{marginTop:8}}>
                <label>Statut</label><br />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="todo">A faire</option>
                    <option value="in-progress">En cours</option>
                    <option value="done">Termine</option>
                </select>
            </div>
            <div style={{marginTop:8}}>
                <button type="submit">Ajouter projet</button>
            </div>
        </form>
    );
}