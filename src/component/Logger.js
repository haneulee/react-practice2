import React, { Component } from "react";
import PropTypes from "prop-types";

let Logger = LoggingComponent =>
  class Logger extends Component {
    componentWillMount() {
      if (this.props.isLog) {
        this.start = new Date();
      }
    }
    componentDidMount() {
      if (this.props.isLog) {
        let ts = new Date().getTime() - this.start.getTime();
        console.log(`### ${this.componentName} mounted : ${ts}ms`);
      }
    }
    componentWillUpdate(nextProps, nextState) {
      if (this.props.isLog) {
        this.start = new Date();
      }
    }
    componentDidUpdate() {
      if (this.props.isLog) {
        let ts = new Date().getTime() - this.start.getTime();
        console.log(`### ${this.componentName} updated : ${ts}ms`);
      }
    }
    render() {
      this.componentName = LoggingComponent.name;
      return <LoggingComponent {...this.props} />;
    }
  };

Logger.propTypes = {
  isLog: PropTypes.bool
};

Logger.defaultProps = {
  isLog: false
};

export default Logger;
