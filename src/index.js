import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { registerObserver } from "react-perf-devtool";
import AppContainer from "./AppContainer";
import TodoStore from "./redux/TodoStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={TodoStore}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

registerObserver();
