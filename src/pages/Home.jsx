import React, { useState } from "react";
import "../styles/Global.scss";
import Forms from "../components/Forms";
import TodoItem from "../components/TodoItem";
import { Container } from "@mui/material";

export default function Home() {
  const [todos, setTodos] = useState(["1", "2"]);

  return (
    <Container maxWidth="xs">
      <Forms />
      <div
        style={{ marginTop: "1em", backgroundColor: "white", marginTop: "1em" }}
      >
        {todos.map((todo) => (
          <TodoItem />
        ))}
      </div>
    </Container>
  );
}
