import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch({ type: "LOAD_TODOS" });
  }, []);

  const addTodo = () => {
    if (!text) return;

    dispatch({ type: "ADD_TODO_ASYNC", payload: text });
    setText("");
  };

  return (
    <div className="container mt-5">
      <h2>Список задач (Redux Saga)</h2>

      <div className="d-flex mb-3">
        <input
          className="form-control me-2"
          placeholder="Введите задачу..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Добавить
        </button>
      </div>

      {todos.map((t) => (
        <div
          key={t.id}
          className="d-flex justify-content-between border p-2 mb-2"
        >
          <span
            style={{
              textDecoration: t.done ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => dispatch({ type: "TOGGLE_TODO", payload: t.id })}
          >
            {t.text}
          </span>

          <div>
            <button
              className="btn btn-sm btn-danger me-2"
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: t.id })
              }
            >
              Удалить
            </button>

            <button
              className="btn btn-sm btn-warning"
              onClick={() => {
                const newText = prompt("Редактировать задачу:", t.text);
                if (newText) {
                  dispatch({
                    type: "EDIT_TODO",
                    payload: { id: t.id, text: newText },
                  });
                }
              }}
            >
              Редактировать
            </button>
          </div>
        </div>
      ))}

      <button
        className="btn btn-secondary mt-3"
        onClick={() => dispatch({ type: "CLEAR" })}
      >
        Очистить список
      </button>
    </div>
  );
}

export default App;