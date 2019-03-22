import React, { Component } from "react";

class About extends Component {
  goHome() {
    if (window.confirm("do you really want to go Home?") === true) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <h2>About</h2>
        <button className="btn btn-primary" onClick={this.goHome.bind(this)}>
          home
        </button>
      </div>
    );
  }
}

export default About;
