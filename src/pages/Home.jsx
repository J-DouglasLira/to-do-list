import React, { useState } from "react";
import "../styles/Global.scss";
import Forms from "../components/Forms";
import TodoItem from "../components/TodoItem";
import { Container } from "@mui/material";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <Container maxWidth="xs">
      <Forms todoHandler={todoHandler} />
      {todos.map((todo) => (
        <div
          style={{
            marginTop: "1em",
            backgroundColor: "white",
            marginTop: "1em",
          }}
        >
          <TodoItem todo={todo} />
        </div>
      ))}
    </Container>
  );
}
