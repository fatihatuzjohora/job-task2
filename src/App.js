import React, { useState } from "react";
import "./styles.css";
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-md">
      <h1 className="text-4xl font-extrabold text-white mb-6 text-center">
        Todo App
      </h1>

      <div className="flex items-center mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          className="ml-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition-colors"
        >
          Add
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Active Todos</h2>
        {todos.filter((todo) => !todo.completed).length > 0 ? (
          <ul>
            {todos
              .filter((todo) => !todo.completed)
              .map((todo, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white p-3 rounded-lg mb-3 shadow-md"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 h-5 w-5"
                      onChange={() => toggleComplete(index)}
                    />
                    <span className="text-lg">{todo.text}</span>
                  </div>
                  <button
                    onClick={() => deleteTodo(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        ) : (
          <p className="text-white">No active tasks.</p>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Completed Todos
        </h2>
        {todos.filter((todo) => todo.completed).length > 0 ? (
          <ul>
            {todos
              .filter((todo) => todo.completed)
              .map((todo, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white p-3 rounded-lg mb-3 shadow-md"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked
                      className="mr-3 h-5 w-5"
                      onChange={() => toggleComplete(index)}
                    />
                    <span className="text-lg line-through">{todo.text}</span>
                  </div>
                  <button
                    onClick={() => deleteTodo(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        ) : (
          <p className="text-white">No completed tasks.</p>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
