import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App.jsx";
import store from "./Store/store.js";
import { Provider } from "react-redux";
import "./serviceWorkerRegistration.js";

const root = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
};

render();
