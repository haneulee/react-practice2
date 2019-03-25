import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }
  render() {
    return (
      <div>
        {/* <h2>Home</h2> */}
        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange}
          />
          {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
        </label>
      </div>
    );
  }
}

export default Home;
