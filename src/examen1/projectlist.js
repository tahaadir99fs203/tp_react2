import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsList({ projects, tasks, onEdit, onDelete, calculateProgress }) {
  return (
    <div>
      {projects.length === 0 ? <p>Aucun projet.</p> :
        <ul>
          {projects.map(p => (
            <li key={p.id} style={{marginBottom:"10px"}}>
              <div><Link to={`/projects/${p.id}`}><strong>{p.title}</strong></Link></div>
              <div>Statut: {p.status} — Progression: {calculateProgress ? calculateProgress(p.id) : 0}%</div>
              <div>
                <button onClick={() => onEdit(p.id, { status: p.status === "todo" ? "in-progress" : "done" })}>Toggle</button>
                <button onClick={() => onDelete(p.id)} style={{marginLeft:8}}>Suppr</button>
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}