import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask,
        date,
        time,
        completed: false,
      },
    ]);
    setNewTask("");
    setDate("");
    setTime("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          📝 Lista de Tareas
        </h1>

        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            placeholder="Escribe una tarea..."
            className="p-2 border rounded-lg outline-none"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="date"
            className="p-2 border rounded-lg outline-none"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            className="p-2 border rounded-lg outline-none"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Agregar
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-3 rounded-lg shadow ${
                task.completed ? "bg-green-100" : "bg-gray-50"
              }`}
            >
              <div>
                <p
                  className={`font-medium ${
                    task.completed ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {task.text}
                </p>
                {task.date && (
                  <p className="text-sm text-gray-500">
                    📅 {task.date} {task.time && `⏰ ${task.time}`}
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="px-2 py-1 text-xs bg-yellow-400 rounded hover:bg-yellow-500"
                >
                  {task.completed ? "Desmarcar" : "Completar"}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;