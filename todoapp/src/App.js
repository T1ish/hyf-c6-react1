import React from 'react';
import './App.css';
import Todolist from './TodoList.js';
import TodoObjects from './assets/todos.json';

const listOfTodos = TodoObjects;

class App extends React.Component {
  render() {
    return (
      <div className="center">
        <h1>Todo List</h1>
        <Todolist list={listOfTodos}/>
      </div>
    );
  }
}

export default App;
