import { laborCostRates } from "./LaborCostRates/laborCostRates.js";
import { costsPerUnitP3 } from "./CostPerUnit/costPerUnitForP3.js";
import {
  materialCheckForFlanges,
  materialCheckForCorner,
  materialCheckForFlangeGlue,
  transportCost,
  gainCost,
  sizeA,
  sizeB,
  sizeA2,
  sizeB2,
  sizeAB,
} from "./calculation.js";

const ductLength = () => 1.2;

const ductSurface = (i, j, state1) => {
  return (
    Math.ceil(
      (sizeA2(i, state1) + sizeB2(j, state1)) * 2 * ductLength() * 1000
    ) / 1000
  );
};

// Cassette

const cassetteQuantity = (j) => {
  let b = sizeB(j) * 1000
  if (b >= 200) {
    return Math.round(b / 2 / 100);
  } else {
    return 0;
  }
};

const cassetteHeight = (i) => {
  let a = sizeA(i) * 1000
  return (a - 5) / 1000;
};

const cassetteLength = () => {
  return ductLength() - 0.1;
};

//Duct BOM

const bomPanel = (i, j, state1) => {
  let panelQ = ductSurface(i, j, state1);
  return panelQ;
};

const bomFlanges = (i, j) => {
  let flangesQ = sizeA(i) * 4 + sizeB(j) * 4;
  return flangesQ;
};

const bomCorners = () => {
  let cornersQ = 8;
  return cornersQ;
};

const bomTape = () => {
  let tapeQ = Math.ceil(((ductLength() * 2) / 50) * 100) / 100;
  return tapeQ;
};

const bomPanelGlue = () => {
  let panelGlueQ = Math.ceil(ductLength() * 0.02 * 4 * 100) / 100;
  return panelGlueQ;
};

const bomFlangeGlue = (i, j) => {
  let flangeGlueQ = Math.ceil(((bomFlanges(i, j) * 10) / 500) * 100) / 100;
  return flangeGlueQ;
};

const bomSealant = () => {
  let sealantQ = Math.ceil(ductLength() * 0.2 * 100) / 100;
  return sealantQ;
};

const bomDisks = (j) => {
  return cassetteQuantity(j) * 4;
};

const bomScrews = (j) => {
  return cassetteQuantity(j) * 4;
};

const bomUV100 = (i, j) => {
  return (cassetteHeight(i) * 2 + cassetteLength() * 2) * cassetteQuantity(j);
};

const bomClimlinerslab100 = (i, j) => {
  return cassetteHeight(i) * cassetteLength() * cassetteQuantity(j);
};

//labor cost

const laborCost = (i, j) => {
  if (sizeAB(i, j) < 0.1225) {
    return laborCostRates.hourlyRate * (50 / 60);
  } else if (sizeAB(i, j) < 0.5625) {
    return laborCostRates.hourlyRate * (55 / 60);
  } else if (sizeAB(i, j) < 1.1025) {
    return laborCostRates.hourlyRate * (60 / 60);
  } else if (sizeAB(i, j) < 2.25) {
    return laborCostRates.hourlyRate * (65 / 60);
  } else {
    return laborCostRates.hourlyRate * (70 / 60);
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

const est = (i, j) => {
  return laborCost(i, j) * (1 + laborCostRates.employersSocialTax);
};

const totalPanelCost = (i, j, state1) => {
  return bomPanel(i, j, state1) * costsPerUnitP3.panelCost[state1];
};

const totalMaterialLoss = (i, j, state1) => {
  return materialLoss(i, j, state1) * costsPerUnitP3.panelCost[state1];
};

const totalFlangeCost = (i, j, state1) => {
  return bomFlanges(i, j) * materialCheckForFlanges(state1);
};

const totalCornerCost = (state1) => {
  return bomCorners() * materialCheckForCorner(state1);
};

const totalTapeCost = () => {
  return bomTape() * costsPerUnitP3.tapeCost["21NS05"];
};

const totalPanelGlueCost = () => {
  return bomPanelGlue() * costsPerUnitP3.panelGlueCost["21CL02"];
};

const totalFlangesGlueCost = (i, j, state1) => {
  return bomFlangeGlue(i, j) * materialCheckForFlangeGlue(state1);
};

const totalSealantCost = () => {
  return bomSealant() * costsPerUnitP3.sealantCost["21SL01"];
};

const totalDisksCost = (j) => {
  return bomDisks(j) * costsPerUnitP3.diskCost["21RF01"];
};

const totalScrewCost = (j) => {
  return bomScrews(j) * costsPerUnitP3.screwCost["21RF03"];
};

const totalUV100Cost = (i, j) => {
  return bomUV100(i, j) * costsPerUnitP3.uv100.uv100;
};

const totalClimlinerslab100Cost = (i, j) => {
  return (
    bomClimlinerslab100(i, j) * costsPerUnitP3.climlinerslab100.climlinerslab100
  );
};

const totalMaterialCost = (i, j, state1) => {
  return (
    totalPanelCost(i, j, state1) +
    totalMaterialLoss(i, j, state1) +
    totalFlangeCost(i, j, state1) +
    totalCornerCost(state1) +
    totalTapeCost() +
    totalPanelGlueCost() +
    totalFlangesGlueCost(i, j, state1) +
    totalSealantCost() +
    totalDisksCost(j) +
    totalScrewCost(j) +
    totalUV100Cost(i, j) +
    totalClimlinerslab100Cost(i, j)
  );
};

const totalCost = (i, j, state1) => {
  return totalMaterialCost(i, j, state1) + est(i, j, state1);
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
