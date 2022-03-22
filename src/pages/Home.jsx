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
    let filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const editTodo = (id, editedText) => {
    var todosArray = [...todos];

    let deletedCountFrom = 1;
    todosArray.splice(id, deletedCountFrom, { text: editedText, id: id });

    setTodos(todosArray);
  };

  return (
    <Container maxWidth="xs">
      <Forms addTodo={addTodo} />
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            marginTop: "1em",
            backgroundColor: "white",
          }}
        >
          <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
        </div>
      ))}
    </Container>
  );
}
