// src/components/TaskItem.jsx
import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Frequency: {task.frequency}</p>
    </div>
  );
};

export default TaskItem;