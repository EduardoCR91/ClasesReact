import { useState } from "react";

export default function App() {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  // Agregar tarea
  const agregarTarea = () => {
    if (tarea.trim() === "") return;
    setLista([...lista, { texto: tarea, completada: false }]);
    setTarea("");
  };

  // Marcar tarea como completada
  const toggleCompletada = (index) => {
    const nuevaLista = [...lista];
    nuevaLista[index].completada = !nuevaLista[index].completada;
    setLista(nuevaLista);
  };

  // Eliminar tarea
  const eliminarTarea = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index);
    setLista(nuevaLista);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          📝 To-Do List
        </h1>

        {/* Input + Botón */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            placeholder="Escribe una tarea..."
            className="flex-1 border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={agregarTarea}
            className="bg-indigo-500 text-white px-4 rounded-xl hover:bg-indigo-600 transition"
          >
            Agregar
          </button>
        </div>

        {/* Lista de tareas */}
        <ul className="space-y-3">
          {lista.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 border rounded-xl p-3 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={t.completada}
                  onChange={() => toggleCompletada(index)}
                  className="w-5 h-5 text-indigo-500 rounded"
                />
                <span
                  className={`${
                    t.completada
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {t.texto}
                </span>
              </div>
              <button
                onClick={() => eliminarTarea(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}