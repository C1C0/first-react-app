import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = (async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    })();
  }, []);

  const fetchTasks = async () => {
    console.log('called');

    const res = await fetch("http://localhost:5000/tasks");

    const data = await res.json();

    return data;
  };

  // Delete task
  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // add task
  const addTask = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks`, {
      method: "POST", headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();

    setTasks([...tasks, data]);
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} propShowAddTask={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask} />}

      {/* Tasks */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
