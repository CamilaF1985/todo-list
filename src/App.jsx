import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const notifyTaskAdded = () => toast.success('Tarea Agregada');
  const notifyTaskDeleted = () => toast.error('Tarea Eliminada');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
      notifyTaskAdded();
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    notifyTaskDeleted();
  };

  return (
    <div className="container mt-5 text-center bg-light">
      <h1 className="custom-text-color mb-4">todos</h1>

      <input
        type="text"
        className="form-control mb-3"
        placeholder={
          tasks.length === 0
            ? "No hay tareas, añadir tareas"
            : null
        }
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTask();
          }
        }}
      />

      {tasks.length > 0 && (
        <ul className="list-group text-left">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {task}
              {hoveredIndex === index && (
                <span
                  className="badge badge-danger badge-pill delete-icon"
                  onClick={() => handleDeleteTask(index)}
                  dangerouslySetInnerHTML={{ __html: '<i class="fas fa-xmark"></i>' }}
                />
              )}
            </li>
          ))}
        </ul>
      )}

      <ToastContainer />
    </div>
  );
}

export default Todo;

















