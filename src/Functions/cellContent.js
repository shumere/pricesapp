import { totalSellingPrice } from "./ductCalculation.js";

//Cell content

export const tableValueForTheRow = (i) => {
  return (i *= 100);
};

export const tableValueForTheFirstColumn = (j) => {
  return (j *= 100);
};

export const cellContent = (i, j) => {
  return totalSellingPrice(i, j);
};
