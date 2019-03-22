import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { registerObserver } from "react-perf-devtool";
import AppContainer from "./component/AppContainer";
import TodoStore from "./redux/TodoStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={TodoStore}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerObserver();
