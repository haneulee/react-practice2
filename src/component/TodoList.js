import React, { Component } from "react";
import MyTime from "./MyTime";
import Todo from "./Todo";
import styles from "./styles";
import PropTypes from "prop-types";

class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>TodoList</h2>
        <hr style={styles} />
        <Todo
          todolist={this.props.todolist}
          add={this.props.add}
          delete={this.props.delete}
          toggle={this.props.toggle}
          isLog="true"
        />
        <button onClick={this.props.toggleModalBox}>modal</button>
        <MyTime
          changeTime={this.props.changeTime}
          curTime={this.props.curTime}
        />
      </div>
    );
  }
}

TodoList.propTypes = {
  todolist: PropTypes.arrayOf(PropTypes.object),
  add: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  toggleModalBox: PropTypes.func.isRequired,
  changeTime: PropTypes.func.isRequired,
  curTime: PropTypes.object.isRequired
};

export default TodoList;
