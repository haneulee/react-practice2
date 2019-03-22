import { Component } from "react";
import { renderRoutes } from "react-router-config";
import { routes } from "../routes";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return renderRoutes(routes, this.props);
  }
}

export default Main;
