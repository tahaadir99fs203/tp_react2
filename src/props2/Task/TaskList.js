import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onToggle, onDelete }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task} onToggle={onToggle} />

                    <button onClick={() => onDelete(task.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;