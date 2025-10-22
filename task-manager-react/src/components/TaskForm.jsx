import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedText = taskText.trim();
    if (!trimmedText) return;

    onAddTask(trimmedText);
    setTaskText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
