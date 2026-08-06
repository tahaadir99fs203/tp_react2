import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectsPage from "./projectspage";
import ProjectDetail from "./projectdetail";

function App() {
    const [data, setData] = useState({
        projects: [
            { id: 1, title: "Site Web", status: "in-progress" }
        ],
        tasks: [
            { id: 1, projectId: 1, title: "Design UI", status: "todo" }
        ],
        members: [
            { id: 1, fullName: "Yassine", role: "Developer" }
        ]
    });

    const addProject = (project) => {
        const newProject = { ...project, id: Date.now() };
        setData(prev => ({ ...prev, projects: [...prev.projects, newProject] }));
    };

    const updateProject = (id, changes) => {
        setData(prev => ({
            ...prev,
            projects: prev.projects.map(p => p.id === id ? { ...p, ...changes } : p)
        }));
    };

    const deleteProject = (id) => {
        setData(prev => ({
            ...prev,
            projects: prev.projects.filter(p => p.id !== id),
            tasks: prev.tasks.filter(t => t.projectId !== id)
        }));
    };

    const addTask = (task) => {
        const newTask = { ...task, id: Date.now() };
        setData(prev => ({ ...prev, tasks: [...prev.tasks, newTask] }));
    };

    return (
        <Router>
            <header style={{padding:"8px 12px", borderBottom:"1px solid #ddd"}}>
                <Link to="/">Accueil</Link>{" | "}<Link to="/projects">Projets</Link>
            </header>

            <main style={{padding:"12px"}}>
                <Routes>
                    <Route path="/" element={<h2>Gestion des Projets</h2>} />
                    <Route path="/projects" element={<ProjectsPage projects={data.projects} tasks={data.tasks} addProject={addProject} updateProject={updateProject} deleteProject={deleteProject} addTask={addTask} />} />
                    <Route path="/projects/:id" element={<ProjectDetail projects={data.projects} tasks={data.tasks} addTask={addTask} updateProject={updateProject} />} />
                </Routes>
            </main> 
        </Router>
    );
}

export default App;