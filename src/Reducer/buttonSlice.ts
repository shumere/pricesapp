import { createSlice } from "@reduxjs/toolkit";

interface ButtonState {
  materialType: string;
  showDuct: boolean;
  showElbow90: boolean;
  showElbow45: boolean;
  showReducer: boolean;
  showOffset: boolean;
  showTee: boolean;
  showEndCap: boolean;
  showPlenum: boolean;
  showSilencer: boolean;
  showDamper: boolean;
  showGrill: boolean;
}

interface ButtonAction1 {
  type: string;
  payload:
    | "15HB21"
    | "15HE21"
    | "15HL21"
    | "15HN21ABT"
    | "15HN21PLUS"
    | "15HS31"
    | "15HP31"
    | "15HR31"
    | "15HR31ABT"
    | "15HR31PLUS"
    | "15HK31";
}

interface ButtonAction2 {
  type: string;
  payload: boolean;
}

const initialState: ButtonState = {
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
};

const buttonSlice = createSlice({
  name: "buttons",
  initialState,
  reducers: {
    changeMaterialType: (state, action: ButtonAction1) => {
      return { ...state, materialType: action.payload };
    },
    clickDuct: (state, action: ButtonAction2) => {
      return { ...state, showDuct: action.payload };
    },
    clickElbow90: (state, action: ButtonAction2) => {
      return { ...state, showElbow90: action.payload };
    },
    clickElbow45: (state, action: ButtonAction2) => {
      return { ...state, showElbow45: action.payload };
    },
    clickReducer: (state, action: ButtonAction2) => {
      return { ...state, showReducer: action.payload };
    },
    clickOffset: (state, action: ButtonAction2) => {
      return { ...state, showOffset: action.payload };
    },
    clickTee: (state, action: ButtonAction2) => {
      return { ...state, showTee: action.payload };
    },
    clickEndCap: (state, action: ButtonAction2) => {
      return { ...state, showEndCap: action.payload };
    },
    clickPlenum: (state, action: ButtonAction2) => {
      return { ...state, showPlenum: action.payload };
    },
    clickSilencer: (state, action: ButtonAction2) => {
      return { ...state, showSilencer: action.payload };
    },
    clickDamper: (state, action: ButtonAction2) => {
      return { ...state, showDamper: action.payload };
    },
    clickGrill: (state, action: ButtonAction2) => {
      return { ...state, showGrill: action.payload };
    },
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

export default buttonSlice;
