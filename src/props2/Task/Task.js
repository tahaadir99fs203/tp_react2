import React from "react";

const Task = ({ task, onToggle }) => {
    return (
        <div>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </span>

            <button onClick={() => onToggle(task.id)}>
                Toggle
            </button>
        </div>
    );
};

export default Task;