import React, { useState } from "react";

export default function TasksList({ tasks = [], projectId, addTask }) {
    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        addTask({ projectId, title: title.trim(), status: "todo" });
        setTitle("");
    };

    return (
        <div>
            <h4>Taches</h4>
            <ul>
                {tasks.map(t => <li key={t.id}>{t.title} - {t.status}</li>)}
            </ul>

            <form onSubmit={submit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nouvelle tache" />
                <button type="submit" style={{marginLeft:8}}>Ajouter</button>
            </form>
        </div>
    );
}