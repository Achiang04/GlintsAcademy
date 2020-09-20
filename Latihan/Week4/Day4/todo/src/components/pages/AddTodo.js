import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="todo-form">
        <input
          className="todo-input"
          type="text"
          name="title"
          placeholder="Add a todo"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input className="todo-button" type="submit" value="Submit" />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
