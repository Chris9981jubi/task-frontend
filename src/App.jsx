
import React from 'react';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';

const App = () => {
  return (
    <div>
      <h1>Task Scheduler App</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  );
};

export default App;
