import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    changeMaterialType: (state, action: PayloadAction<string>) => {
      return { ...state, materialType: action.payload };
    },
    clickDuct: (state, action: PayloadAction<boolean>) => {
      return { ...state, showDuct: action.payload };
    },
    clickElbow90: (state, action: PayloadAction<boolean>) => {
      return { ...state, showElbow90: action.payload };
    },
    clickElbow45: (state, action: PayloadAction<boolean>) => {
      return { ...state, showElbow45: action.payload };
    },
    clickReducer: (state, action: PayloadAction<boolean>) => {
      return { ...state, showReducer: action.payload };
    },
    clickOffset: (state, action: PayloadAction<boolean>) => {
      return { ...state, showOffset: action.payload };
    },
    clickTee: (state, action: PayloadAction<boolean>) => {
      return { ...state, showTee: action.payload };
    },
    clickEndCap: (state, action: PayloadAction<boolean>) => {
      return { ...state, showEndCap: action.payload };
    },
    clickPlenum: (state, action: PayloadAction<boolean>) => {
      return { ...state, showPlenum: action.payload };
    },
    clickSilencer: (state, action: PayloadAction<boolean>) => {
      return { ...state, showSilencer: action.payload };
    },
    clickDamper: (state, action: PayloadAction<boolean>) => {
      return { ...state, showDamper: action.payload };
    },
    clickGrill: (state, action: PayloadAction<boolean>) => {
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

export const materialType = (state: any) => state.buttons.materialType;
export const showDuct = (state: any) => state.buttons.showDuct;
export const showElbow90 = (state: any) => state.buttons.showElbow90;
export const showElbow45 = (state: any) => state.buttons.showElbow45;
export const showReducer = (state: any) => state.buttons.showReducer;
export const showOffset = (state: any) => state.buttons.showOffset;
export const showTee = (state: any) => state.buttons.showTee;
export const showEndCap = (state: any) => state.buttons.showEndCap;
export const showPlenum = (state: any) => state.buttons.showPlenum;
export const showSilencer = (state: any) => state.buttons.showSilencer;
export const showDamper = (state: any) => state.buttons.showDamper;
export const showGrill = (state: any) => state.buttons.showGrill;

export default buttonSlice;
