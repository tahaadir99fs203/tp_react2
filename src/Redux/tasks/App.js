import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, updateTask, deleteTask } from './actions';

function App() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({ id: 1, title: '' });

  const handleAddTask = () => {
    dispatch(addTask({ ...newTask, id: Date.now() }));
    setNewTask({ id: 1, title: '' });
  };

  const handleUpdateTask = (id, updatedTask) => {
    dispatch(updateTask(id, updatedTask));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h1>Liste des Tâches</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleUpdateTask(task.id, { ...task, title: 'Updated Task' })}>
              Mettre à jour
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <h2>Ajouter une Tâche</h2>
      <label>Titre: </label>
      <input
        type="text"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <br />
      <button onClick={handleAddTask}>Ajouter</button>
    </div>
  );
}

export default App;