import React, { Component } from "react";
import PropTypes from "prop-types";
import Logger from "./Logger";

class InputTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }
  addHandler = e => {
    this.props.add(this.state.todo);
    this.setState({ todo: "" });
  };
  changeTodo = e => {
    this.setState({ todo: e.target.value });
  };
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="input-group">
            <input
              id="msg"
              type="text"
              className="form-control"
              name="msg"
              placeholder="to do..."
              value={this.state.todo}
              onChange={this.changeTodo}
            />
            <span
              className="btn btn-primary input-group-addon"
              onClick={this.addHandler}
            >
              추가
            </span>
          </div>
        </div>
      </div>
    );
  }
}

InputTodo.propTypes = {
  add: PropTypes.func.isRequired
};

export default Logger(InputTodo);
