import React, { Component } from "react";
import styles from "./styles";
import InputTodo from "./InputTodo";
import PropTypes from "prop-types";
import Logger from "./Logger";
import TodoItem from "./TodoItem";

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <InputTodo add={this.props.add} isLog="true" />
        <ul>
          {this.props.todolist.map(item => (
            <TodoItem
              key={item.no}
              no={item.no}
              todo={item.todo}
              done={item.done}
              delete={this.props.delete}
              toggle={this.props.toggle}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Todo.propTypes = {
  todolist: PropTypes.arrayOf(PropTypes.object),
  add: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Logger(Todo);
