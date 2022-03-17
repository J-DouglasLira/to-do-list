import React from "react";
import "./styles/Global.scss";
import Forms from "./components/Forms";
import TodoItem from "./components/TodoItem";

export function App() {
  return (
    <div className="App">
      <Forms />
      <TodoItem />
    </div>
  );
}
