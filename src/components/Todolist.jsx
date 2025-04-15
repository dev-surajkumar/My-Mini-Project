import { useState, useEffect, useRef } from 'react';
import './styles/todolist.css';

const getRandomColor = () => {
  const colors = [
    "#1f2937", // dark gray
  "#374151", // darker gray
  "#4b5563", // slate gray
  "#0f172a", // navy black
  "#1e3a8a", // royal blue
  "#1e40af", // deep blue
  "#065f46", // deep green
  "#7c3aed", // deep purple
  "#b91c1c",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [filter, setFilter] = useState('all');

  const isFirstRender = useRef(true);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        text: newTask,
        category: newCategory,
        dueDate: newDueDate,
        completed: false,
        bgColor: getRandomColor(),
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
      setNewCategory('');
      setNewDueDate('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index].text);
  };

  const handleSaveEdit = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex].text = editedTask;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditedTask('');
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

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
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Category"
        />
        <input
          type="date"
          value={newDueDate}
          onChange={(e) => setNewDueDate(e.target.value)}
        />
        <button onClick={handleAddTask}>+Add Task</button>
      </div>

      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      <div className="task-list">
        {filteredTasks.map((task, index) => (
          <div
            key={index}
            className="task-item"
            style={{ backgroundColor: task.bgColor }}
          >
            {editingIndex === index ? (
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
                onKeyDown={handleKeyPress}
                autoFocus
              />
            ) : (
              <p
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              >
                {task.text}
              </p>
            )}

            <small>Category: {task.category || 'None'}</small><br />
            <small>Due: {task.dueDate || 'Not set'}</small>

            <div className="task-actions">
              <i
                className="fa-solid fa-check"
                onClick={() => handleToggleComplete(index)}
                title="Toggle Complete"
              ></i>

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
