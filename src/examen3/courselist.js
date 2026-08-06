import React from "react";
import { Link } from "react-router-dom";

export default function CoursesList({ courses, counts = {}, onEdit, onDelete }) {
    return (
        <div>
            <ul>
                {courses.map(c => (
                    <li key={c.id} style={{marginBottom:8}}>
                        <Link to={`/courses/${c.id}`}><strong>{c.title}</strong></Link>
                        <div>Inscriptions: {counts[c.id] || 0}</div>
                        <div>
                            <button onClick={() => onEdit(c.id, { title: c.title + " (maj)" })}>Edit</button>
                            <button onClick={() => onDelete(c.id)} style={{marginLeft:8}}>Supprimer</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}