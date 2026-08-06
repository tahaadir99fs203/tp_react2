import React from "react";
import { useParams, Link } from "react-router-dom";
import TasksList from "./tasklist";

export default function ProjectDetail({ projects, tasks, addTask, updateProject }) {
  const { id } = useParams();
  const pid = Number(id);
  const project = projects.find(p => p.id === pid);
  const projectTasks = tasks.filter(t => t.projectId === pid);

  if (!project) return <div>Projet non trouvé. <Link to="/projects">Retour</Link></div>;

  return (
    <div>
      <h3>{project.title}</h3>
      <p>Statut: {project.status}</p>
      <button onClick={() => updateProject(pid, { status: project.status === "todo" ? "in-progress" : "done" })}>
        Changer statut
      </button>

      <hr />
      <TasksList tasks={projectTasks} projectId={pid} addTask={addTask} />
      <p><Link to="/projects">Retour à la liste</Link></p>
    </div>
  );
}