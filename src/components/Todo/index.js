import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import List from "./List";
import TodoForm from "./TodoForm";
import "./Todo.css";
class Todo extends Component {
  constructor() {
    super();

    // Initial state...
    this.state = {
      items: []
    };
  }

  addTask = values => {
    // This values are coming from our
    // onSubmit method in our TodoForm.
    const { task } = values;

    this.setState({
      items: [
        ...this.state.items,
        {
          id: uuidv4(),
          task,
          complete: false
        }
      ]
    });
  };

  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>

        <TodoForm addTask={this.addTask} />
        <List items={this.state.items} />
      </div>
    );
  }
}
export default Todo;
