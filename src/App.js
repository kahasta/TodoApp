import React, { Component } from "react";

import "./App.css";
import Todo from "./components/Todo/Todo";
import InputForm from "./components/Input/InputForm";
import Header from "./components/Header/Header";
import TaskCounter from "./components/TaskCounter/TaskCounter";

class App extends Component {
  state = {
    todos: [],
    input: "",
    classP: "",
    completed: false
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos !== null) {
      this.setState({ todos });
    }
  }

  componentDidUpdate() {
    this.saveStateStorage();
  }

  deleteHandler = index => {
    let todos = this.state.todos.concat();
    todos.splice(index, 1);
    this.setState({ todos });
  };

  addTodo = (event, text) => {
    event.preventDefault();

    if (text !== "") {
      let todos = [...this.state.todos];
      todos.push({ text });
      this.setState({ todos, input: "" });
    }
  };

  onChangeTodoCheckBox = index => {
    let todos = this.state.todos.concat();
    todos[index].completed = !todos[index].completed;
    if (todos[index].completed === true) {
      todos[index].classP = "line";
    } else {
      todos[index].classP = "";
    }
    todos.sort((a, b) => a.completed && !b.completed);
    this.setState({ todos });
  };

  getCompletedTasks = () => {
    return this.state.todos.filter(el => el.completed === true).length;
  };

  getTotalTasks = () => {
    return this.state.todos.length;
  };

  saveStateStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos.concat()));
  };

  eventChangeHandler = event => {
    this.setState({ input: event.target.value });
  };
  render() {
    return (
      <div className="main_container">
        <Header />
        <TaskCounter
          total={this.getTotalTasks()}
          completed={this.getCompletedTasks()}
        />
        <InputForm
          addTodo={event => this.addTodo(event, this.state.input)}
          value={this.state.input}
          onChange={event => this.eventChangeHandler(event)}
        />

        <div className="todoList">
          {this.state.todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                text={todo.text}
                checkbox={todo.completed}
                classP={todo.classP}
                onDelete={() => this.deleteHandler(index)}
                onCheckBox={() => this.onChangeTodoCheckBox(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
