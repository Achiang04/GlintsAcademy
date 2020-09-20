import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  getData = () => {
    axios
      .get("https://btm-rn.herokuapp.com/api/v1/todo")
      .then((res) => this.setState({ todos: res.data.results }));
  };

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 100);
  }

  addTodo = (title) => {
    axios.post("https://btm-rn.herokuapp.com/api/v1/todo/", {
      title: title,
    });
  };

  updateTodo = (id, title) => {
    axios
      .put(`https://btm-rn.herokuapp.com/api/v1/todo/${id}`, {
        title: title,
      })
      .then((res) => {
        console.log("update", res.data.results);
      });
  };

  removeTodo = (id) => {
    axios
      .delete(`https://btm-rn.herokuapp.com/api/v1/todo/${id}`)
      .then((res) => console.log("deleting", res.data));
  };

  completeTodo = (id) => {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        console.log(todo._id, "todo is complete", todo.isComplete);
        axios
          .put(`https://btm-rn.herokuapp.com/api/v1/todo/${id}`, {
            isComplete: !todo.isComplete,
          })
          .then((res) => console.log(res.data.results));
      }
      return todo;
    });
  };

  render() {
    return (
      <>
        <h1>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </>
    );
  }
}
