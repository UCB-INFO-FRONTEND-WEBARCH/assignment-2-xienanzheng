import { useMemo, useState } from 'react';
import './App.css';

// Import components
import TaskForm from './components/TaskForm';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import menuIcon from './assets/menu_icon.png';
import searchIcon from './assets/search_icon.png';
import checkIcon from './assets/check_icon.png';
import inboxIcon from './assets/inbox_icon.png';
import calendarIcon from './assets/calendar_icon.png';
import upcomingIcon from './assets/upcoming_icon.png';

const initialTasks = [
  { id: 1, text: 'Call Mom', completed: false },
  { id: 2, text: 'Buy the new issue of Scientific American', completed: false },
  { id: 3, text: 'Return the textbook to Josie', completed: true },
  { id: 4, text: 'Buy the new album by Rake', completed: false },
  { id: 5, text: 'Buy a gift card for Dad', completed: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(), // Unique ID
      text: taskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = useMemo(() => {
    if (filter === 'active') {
      return tasks.filter((task) => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  }, [filter, tasks]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <div className="app-shell">
      <div className="app">
        <header className="app-header">
          <button className="icon-button" type="button" aria-label="Toggle menu">
            <img src={menuIcon} alt="" aria-hidden="true" />
          </button>
          <div className="search-bar">
            <img src={searchIcon} alt="" aria-hidden="true" />
            <input type="search" placeholder="Quick Find" />
          </div>
          <div className="header-progress" aria-label="Completed tasks">
            <img src={checkIcon} alt="" aria-hidden="true" />
            <span>
              {completedTasks}/{totalTasks || 0}
            </span>
          </div>
        </header>

        <div className="app-body">
          <aside className="sidebar">
            <nav>
              <ul className="sidebar-list">
                <li className="sidebar-item active">
                  <img src={inboxIcon} alt="" aria-hidden="true" />
                  <div className="sidebar-item__content">
                    <span className="sidebar-label">Inbox</span>
                    <span className="sidebar-count">{totalTasks}</span>
                  </div>
                </li>
                <li className="sidebar-item">
                  <img src={calendarIcon} alt="" aria-hidden="true" />
                  <div className="sidebar-item__content">
                    <span className="sidebar-label">Today</span>
                    <span className="sidebar-count">{activeTasks}</span>
                  </div>
                </li>
                <li className="sidebar-item">
                  <img src={upcomingIcon} alt="" aria-hidden="true" />
                  <div className="sidebar-item__content">
                    <span className="sidebar-label">Upcoming</span>
                    <span className="sidebar-count">0</span>
                  </div>
                </li>
              </ul>
            </nav>
          </aside>

          <main className="main-panel">
            <div className="main-panel__header">
              <h1>Inbox</h1>
              <div className="filters" role="tablist" aria-label="Task status filters">
                <button
                  className={filter === 'all' ? 'active' : ''}
                  onClick={() => setFilter('all')}
                  type="button"
                >
                  All
                </button>
                <button
                  className={filter === 'active' ? 'active' : ''}
                  onClick={() => setFilter('active')}
                  type="button"
                >
                  Active
                </button>
                <button
                  className={filter === 'completed' ? 'active' : ''}
                  onClick={() => setFilter('completed')}
                  type="button"
                >
                  Completed
                </button>
              </div>
            </div>

            <TaskCounter
              filter={filter}
              visibleCount={filteredTasks.length}
              totalCount={totalTasks}
              completedCount={completedTasks}
              activeCount={activeTasks}
            />

            <TaskList
              tasks={filteredTasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />

            <TaskForm onAddTask={addTask} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
