import { laborCostRates } from "./LaborCostRates/laborCostRates.js";
import { costsPerUnitP3 } from "./CostPerUnit/costPerUnitForP3.js";
import { transportCost, gainCost, sizeA3, sizeB3, sizeAB } from "./calculation.js";

export const endCapSurface = (i, j, state1) => {
  return sizeA3(i, state1) * sizeB3(j, state1);
};

//Duct BOM

const bomPanel = (i, j, state1) => {
  let panelQ = endCapSurface(i, j, state1);
  return panelQ;
};

const bomSealant = (i, j, state1) => {
  let sealantQ = Math.ceil(bomPanel(i, j, state1) * 0.1 * 100) / 100;
  return sealantQ;
};

//labor cost

const laborCost = (i, j) => {
  if (sizeAB(i, j) < 0.1225) {
    return laborCostRates.hourlyRate * (5 / 60);
  } else if (sizeAB(i, j) < 0.5625) {
    return laborCostRates.hourlyRate * (10 / 60);
  } else if (sizeAB(i, j) < 1.1025) {
    return laborCostRates.hourlyRate * (15 / 60);
  } else if (sizeAB(i, j) < 2.25) {
    return laborCostRates.hourlyRate * (20 / 60);
  } else {
    return laborCostRates.hourlyRate * (25 / 60);
  }
};

//Material loss

const materialLoss = (i, j, state1) => {
  if (sizeAB(i, j) < 0.1225) {
    return bomPanel(i, j, state1) * 0.1;
  } else if (sizeAB(i, j) < 0.5625) {
    return bomPanel(i, j, state1) * 0.2;
  } else if (sizeAB(i, j) < 1.1025) {
    return bomPanel(i, j, state1) * 0.3;
  } else if (sizeAB(i, j) < 2.25) {
    return bomPanel(i, j, state1) * 0.4;
  } else {
    return bomPanel(i, j, state1) * 0.7;
  }
};

//Price Calculation

const est = (i, j, state1) => {
  return laborCost(i, j, state1) * (1 + laborCostRates.employersSocialTax);
};

const totalPanelCost = (i, j, state1) => {
  return bomPanel(i, j, state1) * costsPerUnitP3.panelCost[state1];
};

const totalMaterialLoss = (i, j, state1) => {
  return materialLoss(i, j, state1) * costsPerUnitP3.panelCost[state1];
};

const totalSealantCost = (i, j, state1) => {
  return bomSealant(i, j, state1) * costsPerUnitP3.sealantCost["21SL01"];
};

const totalMaterialCost = (i, j, state1) => {
  return totalPanelCost(i, j, state1) + totalSealantCost(i, j, state1);
};

const totalCost = (i, j, state1) => {
  return totalMaterialCost(i, j, state1) + est(i, j, state1) + totalMaterialLoss(i, j, state1);
};

const totalSellingPrice = (i, j, state1) => {
  return (
    Math.round(
      (totalMaterialCost(i, j, state1) * transportCost() +
        totalCost(i, j, state1) * (1 + gainCost())) *
        100
    ) / 100
  );
};

export const cellContent = (i, j, state1) => {
  return totalSellingPrice(i, j, state1);
};
