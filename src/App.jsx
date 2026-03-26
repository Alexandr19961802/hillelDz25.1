import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const addTodo = () => {
    if (!value.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: value,
    });

    setValue("");
  };

  const toggleTodo = (id) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "900px" }}>
      <div
        className="p-4"
        style={{
          background: "#7fe3ea",
          borderRadius: "6px",
          minHeight: "500px",
        }}
      >
        <h1 className="fw-bold mb-3">TODO</h1>

        <div className="d-flex mb-5">
          <input
            type="text"
            className="form-control me-2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn btn-light" onClick={addTodo}>
            Добавить
          </button>
        </div>

        <h2 className="fw-bold mb-3">TODOS</h2>
        <hr />

        <div className="mb-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              className="mb-3 p-3"
              style={{
                background: "#f3e8d5",
                border: "1px solid #777",
                borderRadius: "12px",
                cursor: "pointer",
                textDecoration: todo.done ? "line-through" : "none",
                opacity: todo.done ? 0.7 : 1,
              }}
            >
              {todo.text}
            </div>
          ))}
        </div>

        <p className="fs-4">Всего: {todos.length}</p>
      </div>
    </div>
  );
}

export default App;