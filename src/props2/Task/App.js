import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleToggleTask = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div>
            <h1>Task Manager</h1>

            <TaskForm onAdd={handleAddTask} />
            <TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
        </div>
    );
};

export default App;