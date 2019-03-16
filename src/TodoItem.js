import React, { Component } from "react";
import PropTypes from "prop-types";
import Logger from "./Logger";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.no !== this.props.no || nextProps.done !== this.props.done;
  }
  render() {
    console.log("todoitem render");
    let itemClassName = "list-group-item";
    if (this.props.done) itemClassName += " list-group-item-success";

    return (
      <li className={itemClassName}>
        <span
          className={this.props.done ? "todo-done pointer" : "pointer"}
          onClick={() => {
            this.props.toggle(this.props.no);
          }}
        >
          {this.props.todo}
          {this.props.done ? "(complete)" : ""}
        </span>
        <span
          className="pull-right badge pointer"
          onClick={() => {
            this.props.delete(this.props.no);
          }}
        >
          삭제
        </span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  no: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  delete: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Logger(TodoItem);
