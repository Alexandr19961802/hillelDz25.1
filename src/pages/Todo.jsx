import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
} from "@mui/material";

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Сделать домашку", done: false },
    { id: 2, text: "Повторить Redux", done: true },
  ]);

  const [value, setValue] = useState("");

  const addTodo = () => {
    if (!value.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: value,
        done: false,
      },
    ]);

    setValue("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        TODO List
      </Typography>

      <Card
        sx={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <CardContent>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={3}>
            <TextField
              fullWidth
              label="Новая задача"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button variant="contained" onClick={addTodo}>
              Добавить
            </Button>
          </Stack>

          <List>
            {todos.map((todo) => (
              <ListItem key={todo.id} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => toggleTodo(todo.id)}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  <ListItemText
                    primary={
                      <span
                        style={{
                          textDecoration: todo.done
                            ? "line-through"
                            : "none",
                          opacity: todo.done ? 0.6 : 1,
                        }}
                      >
                        {todo.text}
                      </span>
                    }
                  />

                  <Chip
                    label={todo.done ? "Готово" : "В процессе"}
                    color={todo.done ? "success" : "secondary"}
                    size="small"
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Todo;