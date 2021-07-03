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
    materialType: "15HS31",
    showDuct: false,
    showElbow90: false,
  },
  reducers: {
    changeMaterialType: (state, action) => {
      return { ...state, materialType: action.payload };
    },
    clickDuct: (state, action) => {
      return { ...state, showDuct: action.payload };
    },
    clickElbow90: (state, action) => {
      return { ...state, showElbow90: action.payload };
    },
  },
});

const store = configureStore({
  reducer: {
    buttons: buttonSlice.reducer,
  },
});

export const {changeMaterialType, clickDuct, clickElbow90} = buttonSlice.actions;
export const materialType = (state) => state.buttons.materialType;
export const showDuct = (state) => state.buttons.showDuct;
export const showElbow90 = (state) => state.buttons.showElbow90;

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
