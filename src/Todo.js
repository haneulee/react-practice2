import React, { Component } from "react";
import styles from "./styles";
import InputTodo from "./InputTodo";
import PropTypes from "prop-types";

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <InputTodo add={this.props.add} />
        <ul>
          {this.props.todolist.map(item => {
            let itemClassName = "list-group-item";
            if (item.done) itemClassName += " list-group-item-success";

            return (
              <li key={item.no} className={itemClassName}>
                <span
                  className={item.done ? "todo-done pointer" : "pointer"}
                  onClick={() => {
                    this.props.toggle(item.no);
                  }}
                >
                  {item.todo}
                  {item.done ? "(complete)" : ""}
                </span>
                <span
                  className="pull-right badge pointer"
                  onClick={() => {
                    this.props.delete(item.no);
                  }}
                >
                  삭제
                </span>
              </li>
            );
          })}
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

export default Todo;
