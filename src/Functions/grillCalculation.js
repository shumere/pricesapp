import { laborCostRates } from "./LaborCostRates/laborCostRates.js";
import { costsPerUnitProLam } from "./CostPerUnit/costPerUnitForProLam.js";
import { sizeA, sizeB, sizeAB, transportCost, gainCost } from "./calculation.js";

//Grill Calculation

const pl130Size = (j) => {
  return Math.round((sizeB(j) - 0.05) * 1000) / 1000;
};

const pl131Size = (i) => {
  return Math.round((sizeA(i) - 0.05) * 1000) / 1000;
};

const pl101DSize = (j) => {
  return Math.round((sizeB(j) - 0.003) * 1000) / 1000;
};

const pl101DQuantity = (i) => {
  return sizeA(i) / 0.1;
};

//Grill Damper BOM

const bomPL130 = (j) => {
  return pl130Size(j) * 2;
};

const bomPL131 = (i) => {
  return pl131Size(i) * 2;
};

const bomPL101D = (i, j) => {
  return pl101DSize(j) * pl101DQuantity(i);
};

const bomA130 = () => {
  return 4;
};

const bomN827 = (i) => {
  return sizeA(i) * 10 * 2;
};

const bomGrid = (i, j) => {
  return sizeA(i) * sizeB(j);
};
//labor cost

const laborCost = (i, j) => {
  if (sizeAB(i, j) < 0.1225) {
    return laborCostRates.hourlyRate * 1.25;
  } else if (sizeAB(i, j) < 0.5625) {
    return laborCostRates.hourlyRate * 1.5;
  } else if (sizeAB(i, j) < 1.1025) {
    return laborCostRates.hourlyRate * 1.75;
  } else if (sizeAB(i, j) < 2.25) {
    return laborCostRates.hourlyRate * 2;
  } else {
    return laborCostRates.hourlyRate * 2.25;
  }
};

//Price Calculation

const est = (i, j) => {
  return laborCost(i, j) * (1 + laborCostRates.employersSocialTax);
};

const totalPL130 = (j) => {
  return bomPL130(j) * costsPerUnitProLam.grillMaterial.PL130;
};

const totalPL131 = (i) => {
  return bomPL131(i) * costsPerUnitProLam.grillMaterial.PL131;
};

const totalPL101D = (i,j) => {
  return bomPL101D(i,j) * costsPerUnitProLam.grillMaterial.PL101D;
};

const totalA130 = () => {
  return bomA130() * costsPerUnitProLam.grillMaterial.A130;
};

const totalN827 = (i) => {
  return bomN827(i) * costsPerUnitProLam.grillMaterial.N827;
};

const totalGrid = (i, j) => {
  return bomGrid(i, j) * costsPerUnitProLam.grillMaterial.Grid;
};

const totalMaterialCost = (i, j, state1) => {
  return (
    totalPL130(j) +
    totalPL131(i) +
    totalPL101D(i, j) +
    totalA130() +
    totalN827(i) +
    totalGrid(i, j)
  );
};

const totalCost = (i, j, state1) => {
  return totalMaterialCost(i, j, state1) + est(i, j, state1);
};

const totalSellingPrice = (i, j, state1) => {
  return (
    Math.round(
      (totalMaterialCost(i, j, state1) * transportCost() +
        totalCost(i, j, state1) * (1 + gainCost() * 0)) *
        100
    ) / 100
  );
};

export const cellContent = (i, j, state1) => {
  return totalSellingPrice(i, j, state1);
};
