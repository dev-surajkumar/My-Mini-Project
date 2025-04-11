import { useState, useEffect, useRef } from 'react';
import './styles/todolist.css';

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const isFirstRender = useRef(true);

  // Load tasks from localStorage on page load
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage, but skip the first render
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  // Delete Task
  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  // Enable editing mode
  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
  };

  // Save edited task
  const handleSaveEdit = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = editedTask;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditedTask('');
  };

  // Handle Enter key while editing
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    }
  };

  return (
    <div className="todo-container">
      <h1>My To-Do List</h1>

      <div className="todo-main">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type Your Task"
        />
        <button onClick={handleAddTask}>+Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            {editingIndex === index ? (
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
                onKeyDown={handleKeyPress}
                autoFocus
              />
            ) : (
              <p>{task}</p>
            )}

            <div className="task-actions">
              {editingIndex === index ? (
                <i
                  className="fa-solid fa-check"
                  onClick={handleSaveEdit}
                  title="Save"
                ></i>
              ) : (
                <i
                  className="fa-solid fa-pen pen"
                  onClick={() => handleEditTask(index)}
                  title="Edit"
                ></i>
              )}

              <i
                className="fa-solid fa-trash delete"
                onClick={() => handleDeleteTask(index)}
                title="Delete"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
