import { ConnectedRouter } from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "./store/index";
import { history } from "./store";
import AnotherStore from "./anotherStore";
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AnotherStore>
        <Routes />
      </AnotherStore>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
