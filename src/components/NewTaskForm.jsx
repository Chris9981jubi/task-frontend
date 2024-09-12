import React, { useState } from 'react';
import './NewTaskForm.css';

const NewTaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For now, just simulate success
    if (!taskName || !taskDescription || !dueDate) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setSuccess('Task added successfully!');
    // Clear fields
    setTaskName('');
    setTaskDescription('');
    setDueDate('');
  };

  return (
    <div className="new-task-form">
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="taskDescription">Description</label>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter task description"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Add Task</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default NewTaskForm;
