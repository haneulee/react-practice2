import React, { Component } from "react";
import PropTypes from "prop-types";

class MyTime extends Component {
  render() {
    return (
      <div className="row">
        <div className="col--xs-6">
          <button
            className="btn btnPrimary"
            onClick={() => this.props.changeTime()}
          >
            check current time!
          </button>
        </div>
        <div className="col-xs-6">
          <h4>
            <span className="label label-default">
              {this.props.curTime.toLocaleString()}
            </span>
          </h4>
        </div>
      </div>
    );
  }
}

MyTime.propTypes = {
  curTime: PropTypes.object.isRequired,
  changeTime: PropTypes.func.isRequired
};

export default MyTime;
