import React from "react";
import "./styles/Global.scss";
import Forms from "./components/Forms";
import TodoItem from "./components/TodoItem";
import { Container } from "@mui/material";

export function App() {
  return (
    <Container maxWidth="xs">
      <Forms />
      <TodoItem />
    </Container>
  );
}
