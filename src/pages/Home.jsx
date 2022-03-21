import React, { useState } from "react";
import "../styles/Global.scss";
import Forms from "../components/Forms";
import TodoItem from "../components/TodoItem";
import { Container } from "@mui/material";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    let filtered = todos.filter((todo)=>todo.id !== id);
    setTodos(filtered);
  };

  return (
    <Container maxWidth="xs">
      <Forms addTodo={addTodo} />
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            marginTop: "1em",
            backgroundColor: "white"
          }}
        >
          <TodoItem todo={todo} deleteTodo={deleteTodo} />
        </div>
      ))}
    </Container>
  );
}
