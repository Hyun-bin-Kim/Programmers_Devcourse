import React, { useState, useRef } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 기초 공부하기",
      checked: true,
    },
    {
      id: 2,
      text: "포트폴리오 만들기",
      checked: true,
    },
    {
      id: 3,
      text: "프로젝트 준비하기",
      checked: false,
    },
  ]);
  
  const nextId = useRef(4);
  
  const insertHandler = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos([...todos, todo]);
    nextId.current += 1;
  };

  const removeHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert insertItem={insertHandler} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={removeHandler} />
    </TodoTemplate>
  );
}

export default App;
