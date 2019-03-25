import React, { Component } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal"
};

class Members extends Component {
  constructor(props) {
    super(props);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this.state = {
      class: STATUS.NORMAL
    };
  }
  _onMouseEnter() {
    this.setState({ class: STATUS.HOVERED });
  }
  _onMouseLeave() {
    this.setState({ class: STATUS.NORMAL });
  }
  render() {
    return (
      <div>
        {/* <h2>Members</h2> */}
        <a
          className={this.state.class}
          href={this.props.page || "#"}
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
        >
          {this.props.children}
        </a>
      </div>
    );
  }
}

// export let sum = (v1, v2) => {
//   return v1 + v2;
// };

export default Members;
