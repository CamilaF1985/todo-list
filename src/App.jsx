import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import TaskItem from './TaskItem';

function Todo() {
  // Estados y sus valores iniciales
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Funciones de notificación para agregar y eliminar tareas
  const notifyTaskAdded = () => toast.success('Tarea Agregada');
  const notifyTaskDeleted = () => toast.error('Tarea Eliminada');

  // Función para manejar la adición de nuevas tareas
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
      notifyTaskAdded();
    }
  };

  // Función para manejar la eliminación de tareas
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    notifyTaskDeleted();
  };

  // Calcula el número de tareas restantes
  const remainingTasks = tasks.length;

  // Funciones para manejar la entrada del usuario
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  // Funciones para manejar eventos de mouse
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="container mt-5 text-center bg-light">
      <h1 className="custom-text-color mb-4">todos</h1>

      {/* Input para agregar nuevas tareas */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder={remainingTasks === 0 ? "No hay tareas, añadir tareas" : null}
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      {/* Lista de tareas renderizadas como componentes TaskItem */}
      {remainingTasks > 0 && (
        <ul className="list-group text-left">
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              hoveredIndex={hoveredIndex}
              onDelete={handleDeleteTask}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              isLast={index === tasks.length - 1}
              remainingTasks={remainingTasks}
            />
          ))}
        </ul>
      )}

      {/* Componente de notificación para mensajes de éxito/error */}
      <ToastContainer />
    </div>
  );
}

export default Todo;






































