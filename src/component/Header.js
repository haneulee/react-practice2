import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-heading">
          <h2 className="text-center">FOXES AND FOSSILS</h2>
          <p>
            <a href="http://foxesandfossils.com">http://foxesandfossils.com</a>
          </p>
          <div className="row">
            <div className="col-xs-12">
              <Link className="btn btn-success menu" to="/">
                Home
              </Link>
              <Link className="btn btn-success menu" to="/about">
                About
              </Link>
              <Link className="btn btn-success menu" to="/members">
                Members
              </Link>
              <Link className="btn btn-success menu" to="/todolist">
                Todolist
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
