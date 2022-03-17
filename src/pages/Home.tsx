import React from "react";
import "../styles/Global.scss";
import Forms from "../components/Forms";
import TodoItem from "../components/TodoItem";
import { Container } from "@mui/material";


export default function Home() {
  return (
    <Container maxWidth="xs">
      <Forms />
      <div style={{marginTop: "1em", backgroundColor: 'white'}}>
        <TodoItem />
      </div>
    </Container>
  );
}
