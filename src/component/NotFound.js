import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div>
        <h3>There is no route that you request.</h3>
        <p>route : {this.props.location.pathname}</p>
      </div>
    );
  }
}

export default NotFound;
