import './App.scss';
import React, { useState } from 'react';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

//Form text.
const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>My To Do List</h1><br />
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;