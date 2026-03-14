import { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Купить хлеб", done: false },
    { text: "Сделать домашку", done: true },
  ]);

  const [value, setValue] = useState("");

  const addTodo = () => {
    if (!value.trim()) return;

    setTodos([...todos, { text: value, done: false }]);
    setValue("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center">Todo List</h2>

      <ListGroup>
        {todos.map((todo, index) => (
          <ListGroup.Item
            key={index}
            onClick={() => toggleTodo(index)}
            style={{
              cursor: "pointer",
              textDecoration: todo.done ? "line-through" : "none"
            }}
          >
            {todo.text}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Form className="mt-4">
        <Form.Control
          placeholder="Новая задача"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Button className="mt-3 w-100" onClick={addTodo}>
          Добавить
        </Button>
      </Form>
    </Container>
  );
}