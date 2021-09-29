import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "blabal",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Good tasks",
      day: "Feb 8th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Feb 7th at 6:30pm",
      reminder: true,
    },
  ]);

  // Delete task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <Header />
      {
        tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : "No Tasks To Show"
      }
    </div>
  );
}

export default App;
