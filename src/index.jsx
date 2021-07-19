import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import store from "./Store/store.js";
import { Provider } from "react-redux";

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
//console.log(buttonSlice.actions.checkButton())
// console.log(buttonSlice.actions.clickButton())
//store.subscribe(() => console.log("Current state is: ", store.getState()));
