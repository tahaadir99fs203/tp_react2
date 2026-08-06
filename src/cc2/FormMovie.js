import { useState } from "react";

function FormMovie({ onAdd }) {
    const [form, setForm]= useState({
        title: "",
        genre: "",
        duration: 0,
        releaseYear: 0,
        directorId: "",
        rating: 0
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAdd(form);
        setForm({ title: "", genre: "", duration: 0, releaseYear: 0, directorId: "", rating: 0 });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Ajouter Movie</h3>
            <input name="title" placeholder="Title" onChange={handleChange} value={form.title} />
            <input name="genre" placeholder="Genre" onChange={handleChange} value={form.genre} />
            <input name="duration" type="number" placeholder="Duration" onChange={handleChange} value={form.duration} />
            <input name="releaseYear" type="number" placeholder="Year" onChange={handleChange} value={form.releaseYear} />
            <input name="directorId" type="number" placeholder="Director ID" onChange={handleChange} value={form.directorId} />
            <input name="rating" type="number" placeholder="Rating" onChange={handleChange} value={form.rating} />

            <button>Ajouter Movie</button>
        </form>
    );
}

export default FormMovie;