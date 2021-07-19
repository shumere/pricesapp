import { configureStore, createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "buttons",
  initialState: {
    materialType: "15HS31",
    showDuct: false,
    showElbow90: false,
    showElbow45: false,
    showReducer: false,
    showOffset: false,
    showTee: false,
    showEndCap: false,
    showPlenum: false,
    showSilencer: false,
    showDamper: false,
    showGrill: false,
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
    clickElbow45: (state, action) => {
      return { ...state, showElbow45: action.payload };
    },
    clickReducer: (state, action) => {
      return { ...state, showReducer: action.payload };
    },
    clickOffset: (state, action) => {
      return { ...state, showOffset: action.payload };
    },
    clickTee: (state, action) => {
      return { ...state, showTee: action.payload };
    },
    clickEndCap: (state, action) => {
      return { ...state, showEndCap: action.payload };
    },
    clickPlenum: (state, action) => {
      return { ...state, showPlenum: action.payload };
    },
    clickSilencer: (state, action) => {
      return { ...state, showSilencer: action.payload };
    },
    clickDamper: (state, action) => {
      return { ...state, showDamper: action.payload };
    },
    clickGrill: (state, action) => {
      return { ...state, showGrill: action.payload };
    },
  },
});

const store = configureStore({
  reducer: {
    buttons: buttonSlice.reducer,
  },
});

export const {
  changeMaterialType,
  clickDuct,
  clickElbow90,
  clickElbow45,
  clickReducer,
  clickOffset,
  clickTee,
  clickEndCap,
  clickPlenum,
  clickSilencer,
  clickDamper,
  clickGrill,
} = buttonSlice.actions;
export const materialType = (state) => state.buttons.materialType;
export const showDuct = (state) => state.buttons.showDuct;
export const showElbow90 = (state) => state.buttons.showElbow90;
export const showElbow45 = (state) => state.buttons.showElbow45;
export const showReducer = (state) => state.buttons.showReducer;
export const showOffset = (state) => state.buttons.showOffset;
export const showTee = (state) => state.buttons.showTee;
export const showEndCap = (state) => state.buttons.showEndCap;
export const showPlenum = (state) => state.buttons.showPlenum;
export const showSilencer = (state) => state.buttons.showSilencer;
export const showDamper = (state) => state.buttons.showDamper;
export const showGrill = (state) => state.buttons.showGrill;

export default store;
