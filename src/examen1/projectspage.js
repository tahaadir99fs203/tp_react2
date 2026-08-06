import React from "react";
import ProjectsList from "./projectlist";
import ProjectForm from "./projectform";
import { calculateProjectProgress } from "./projectutil";

export default function ProjectsPage({ projects, tasks, addProject, updateProject, deleteProject, addTask }) {
    return (
        <div>
            <h3>Liste des projets</h3>
            <div style={{display:"flex", gap:"16px", alignItems:"flex-start"}}>
                <div style={{flex:1}}>
                    <ProjectForm onSubmit={addProject} />
                </div>
                <div style={{flex:2}}>
                    <ProjectsList projects={projects} tasks={tasks} onEdit={updateProject} onDelete={deleteProject} calculateProgress={(pid) => calculateProjectProgress(pid, tasks)} />
                </div>
            </div>
        </div>
    );
}