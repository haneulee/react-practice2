import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: Date.now() / 1000
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ seconds: Date.now() / 1000 });
  }
  goHome() {
    if (window.confirm("do you really want to go Home?") === true) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>{this.state.seconds} seconds have ellapsed since the UNIX epoch.</p>
        <button className="btn btn-primary" onClick={this.goHome.bind(this)}>
          home
        </button>
      </div>
    );
  }
}

export default About;
