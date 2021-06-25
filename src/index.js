import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// const initialState = {
//   currentState1: false,
//   currentState2: false,
// };

// const CLICKBUTTON = "CLICKBUTTON";
// const CHECKBUTTON = "CHECKBUTTON";

// const clickReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CHECKBUTTON:
//       return { ...state, currentState1: action.payload };
//     case CLICKBUTTON:
//       return { ...state, currentState2: action.payload };
//     default:
//       return state;
//   }
// };

const buttonSlice = createSlice({
  name: "buttons",
  initialState: {
    currentState1: false,
    currentState2: false,
  },
  reducers: {
    checkButton: (state, action) => {
      return { ...state, currentState1: action.payload };
    },
    clickButton: (state, action) => {
      return { ...state, currentState2: action.payload };
    },
  },
});

const store = configureStore({
  reducer: {
    buttons: buttonSlice.reducer,
  },
});

export const {checkButton, clickButton} = buttonSlice.actions;
export const selectState1 = (state) => state.buttons.currentState1;
export const selectState2 = (state) => state.buttons.currentState2;

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
