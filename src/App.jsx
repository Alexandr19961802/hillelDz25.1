import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Купить хлеб", done: false },
    { text: "Сделать домашку", done: true },
  ]);

  const [value, setValue] = useState("");

  const addTodo = () => {
    if (value.trim() === "") return;

    setTodos([
      ...todos,
      { text: value, done: false }
    ]);

    setValue("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo List</h1>

      {todos.map((todo, index) => (
        <div
          key={index}
          onClick={() => toggleTodo(index)}
          style={{
            cursor: "pointer",
            textDecoration: todo.done ? "line-through" : "none"
          }}
        >
          {todo.text}
        </div>
      ))}

      <div style={{ marginTop: 20 }}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Новая задача"
        />

        <button onClick={addTodo}>
          Добавить
        </button>
      </div>
    </div>
  );
}