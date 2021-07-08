import { material } from "./MaterialType/materialType";
import { costsPerUnit } from "./CostPerUnit/costPerUnit";

//Material check for thickness

export const materialCheckForThickness = (state1) => {
  if (
    state1 === "15HS31" ||
    state1 === "15HP31" ||
    state1 === "15HR31" ||
    state1 === "15HR31ABT" ||
    state1 === "15HR31PLUS" ||
    state1 === "15HK31"
  ) {
    return (material.thickness["30mm"] / 1000) * 2;
  } else if (
    state1 === "15HB21" ||
    state1 === "15HE21" ||
    state1 === "15HN21ABT" ||
    state1 === "15HN21PLUS"
  ) {
    return (material.thickness["20mm"] / 1000) * 2;
  } else {
    return 0;
  }
};

export const materialCheckForMiller = (state1) => {
  if (
    state1 === "15HS31" ||
    state1 === "15HP31" ||
    state1 === "15HR31" ||
    state1 === "15HR31ABT" ||
    state1 === "15HR31PLUS" ||
    state1 === "15HK31"
  ) {
    return (material.millerSpace["30mm"] / 1000) * 2;
  } else if (
    state1 === "15HB21" ||
    state1 === "15HE21" ||
    state1 === "15HN21ABT" ||
    state1 === "15HN21PLUS"
  ) {
    return (material.millerSpace["20mm"] / 1000) * 2;
  } else {
    return 0;
  }
};

export const materialCheckForFlanges = (state1) => {
  if (
    state1 === "15HS31" ||
    state1 === "15HP31" ||
    state1 === "15HR31" ||
    state1 === "15HR31ABT" ||
    state1 === "15HR31PLUS" ||
    state1 === "15HK31"
  ) {
    return costsPerUnit.flangesCost["161/30"];
  } else if (
    state1 === "15HB21" ||
    state1 === "15HE21" ||
    state1 === "15HN21ABT" ||
    state1 === "15HN21PLUS"
  ) {
    return costsPerUnit.flangesCost[161];
  } else {
    return 0;
  }
};

export const materialCheckForCorner = (state1) => {
  if (
    state1 === "15HS31" ||
    state1 === "15HP31" ||
    state1 === "15HR31" ||
    state1 === "15HR31ABT" ||
    state1 === "15HR31PLUS" ||
    state1 === "15HK31"
  ) {
    return costsPerUnit.ductCornerCost["21SQ02"];
  } else if (
    state1 === "15HB21" ||
    state1 === "15HE21" ||
    state1 === "15HN21ABT" ||
    state1 === "15HN21PLUS"
  ) {
    return costsPerUnit.ductCornerCost["21SQ01"];
  } else {
    return 0;
  }
};

export const materialCheckForFlangeGlue = (state1) => {
  if (
    state1 === "15HS31" ||
    state1 === "15HP31" ||
    state1 === "15HR31" ||
    state1 === "15HR31ABT" ||
    state1 === "15HR31PLUS" ||
    state1 === "15HK31"
  ) {
    return costsPerUnit.flangesGlueCost["21CL09"];
  } else if (
    state1 === "15HB21" ||
    state1 === "15HE21" ||
    state1 === "15HN21ABT" ||
    state1 === "15HN21PLUS"
  ) {
    return costsPerUnit.flangesGlueCost["21CL08"];
  } else {
    return 0;
  }
};

// Reinforcement step

export const reinforcementStep = () => 0.75;

//Duct Calculation

export const tableValueForTheRow = (i) => {
  return (i *= 100);
};

export const tableValueForTheFirstColumn = (j) => {
  return (j *= 100);
};

export const sizeA = (i) => {
  let a = tableValueForTheRow(i) / 1000;
  return a;
};

export const sizeA2 = (i, state1) => {
  let a2 = sizeA(i) + materialCheckForThickness(state1);
  return a2;
};

//SizeA3 is for fittings
export const sizeA3 = (i, state1) => {
  let a3 = sizeA2(i, state1) + materialCheckForMiller(state1);
  return a3;
};

export const sizeB = (j) => {
  let b = tableValueForTheFirstColumn(j) / 1000;
  return b;
};

export const sizeB2 = (j, state1) => {
  let b2 = sizeB(j) + materialCheckForThickness(state1);
  return b2;
};

//SizeB3 is for fittings
export const sizeB3 = (j, state1) => {
  let b3 = sizeB2(j, state1) + materialCheckForMiller(state1);
  return b3;
};

//Profit Rates

export const transportCost = () => {
  let logistics = 0.15;
  return logistics;
};

export const gainCost = () => {
  let gain = 1;
  return gain;
};

export const sizeAB = (i, j) => {
  return sizeA(i) * sizeB(j);
};