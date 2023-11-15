import React from 'react';
import TaskFooter from './TaskFooter';

function TaskItem({ task, index, hoveredIndex, onDelete, onMouseEnter, onMouseLeave, isLast, remainingTasks }) {
  // Función para manejar el clic en el ícono de eliminación
  const handleDeleteClick = () => {
    onDelete(index);
  };

  // Función para renderizar el ícono de eliminación si el mouse está sobre la tarea
  const renderDeleteIcon = () => {
    if (hoveredIndex === index) {
      return (
        <span
          className="badge badge-danger badge-pill delete-icon"
          onClick={handleDeleteClick}
          dangerouslySetInnerHTML={{ __html: '<i class="fas fa-xmark"></i>' }}
        />
      );
    }
    return null;
  };

  return (
    <li
      // Aplica una clase 'hovered' si el mouse está sobre la tarea
      className={`task-card list-group-item ${hoveredIndex === index ? 'hovered' : ''}`}
      // Maneja el evento onMouseEnter para resaltar la tarea
      onMouseEnter={() => onMouseEnter(index)}
      // Maneja el evento onMouseLeave para quitar el resaltado de la tarea
      onMouseLeave={onMouseLeave}
    >
      <div className="d-flex justify-content-between align-items-center w-100">
        {/* Muestra el texto de la tarea */}
        <span>{task}</span>
        {/* Renderiza el ícono de eliminación si el mouse está sobre la tarea */}
        {renderDeleteIcon()}
      </div>
      {/* Renderiza el componente TaskFooter solo para la última tarea */}
      {isLast && <TaskFooter remainingTasks={remainingTasks} />}
    </li>
  );
}

export default TaskItem;






