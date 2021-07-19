import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "../Reducer/buttonSlice";

const store = configureStore({
  reducer: {
    buttons: buttonSlice.reducer,
  },
});

export default store;
