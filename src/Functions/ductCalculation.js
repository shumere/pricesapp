import {
  tableValueForTheRow,
  tableValueForTheFirstColumn,
} from "./cellContent";

//Duct Calculation

const material = {
  thickness: {
    "20mm": 20,
    "30mm": 30,
  },
  millerSpace: {
    "20mm": 26,
    "30mm": 36,
  },
  panelType: {
    "15HB21": "15HB21",
    "15HS31": "15HS31",
  },
  flangesType: {
    161: "161",
    "161/30": "161/30",
  },
  ductAngleType: {
    "21SQ01": "21SQ01",
    "21SQ02": "21SQ02",
  },
};

const costsPerUnit = {
  panelCost: {
    "15HB21": 5,
    "15HS31": 9,
  },
  flangesCost: {
    161: 1.15,
    "161/30": 1.3,
  },
  ductCornerCost: {
    "21SQ01": 0.12,
    "21SQ02": 0.14,
  },
  flangesGlueCost: {
    "21CL08": 4.55,
    "21CL09": 8.3,
  },
  tapeCost: {
    "21NS05": 8.85,
  },
  panelGlueCost: {
    "21CL02": 4.55,
  },
  sealantCost: {
    "21SL01": 1.24,
  },
  diskCost: {
    "21RF01": 0.38,
  },
  screwCost: {
    "21RF03": 0.0945,
  },
  reinforcementCost: {
    "21RF02": 1.33,
  },
};

//console.log(materialThickness["30mm"])

const sizeA = (i) => {
  let a = tableValueForTheRow(i) / 1000;
  return a;
};

const sizeA2 = (i) => {
  let a2 = sizeA(i) + (material.thickness["30mm"] / 1000) * 2;
  return a2;
};

const sizeB = (j) => {
  let b = tableValueForTheFirstColumn(j) / 1000;
  return b;
};

const sizeB2 = (j) => {
  let b2 = sizeB(j) + (material.thickness["30mm"] / 1000) * 2;
  return b2;
};

//SizeA3 is for fittings
const sizeA3 = (i) => {
  let a3 = sizeA2(i) + (material.millerSpace["30mm"] / 1000) * 2;
  return a3;
};
//SizeB3 is for fittings
const sizeB3 = (j) => {
  let b3 = sizeB2(j) + (material.millerSpace["30mm"] / 1000) * 2;
  return b3;
};

const ductLength = () => 1.2;

const ductSurface = (i, j) => {
  return Math.ceil((sizeA2(i) + sizeB2(j)) * 2 * ductLength() * 1000) / 1000;
};

const reinforcementStep = () => 0.75;

const bomPanel = (i, j) => {
  let panelQ = ductSurface(i, j);
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

const bomDisks = (i, j) => {
  let disksQ =
    (sizeA2(i) >= 1 ? 4 * Math.floor(sizeA2(i) / reinforcementStep()) : 0) +
    (sizeB2(j) >= 1 ? 4 * Math.floor(sizeB2(j) / reinforcementStep()) : 0);
  return disksQ;
};

const bomScrews = (i, j) => {
  let screwsQ =
    (sizeA2(i) >= 1 ? 2 * Math.floor(sizeA2(i) / reinforcementStep()) : 0) +
    (sizeB2(j) >= 1 ? 2 * Math.floor(sizeB2(j) / reinforcementStep()) : 0);
  return screwsQ;
};

const bomReinforcement = (i, j) => {
  let reinforcementQ =
    (sizeA2(i) >= 1
      ? sizeA2(i) * Math.floor(sizeA2(i) / reinforcementStep())
      : 0) +
    (sizeB2(j) >= 1
      ? sizeB2(j) * Math.floor(sizeB2(j) / reinforcementStep())
      : 0);
  return reinforcementQ;
};

const transportCost = () => {
  let logistics = 0.15;
  return logistics;
};

const gainCost = () => {
  let gain = 1;
  return gain;
};

const laborCostRates = {
  hourlyRate: 12, //brutto euro/hour
  employersSocialTax: 0.2409, // % euro/hour
};

const sizeAB = (i, j) => {
  return sizeA(i) * sizeB(j);
};

const laborCost = (i, j) => {
  if (sizeAB(i, j) < 0.1225) {
    return laborCostRates.hourlyRate * (10 / 60);
  } else if (sizeAB(i, j) < 0.5625) {
    return laborCostRates.hourlyRate * (15 / 60);
  } else if (sizeAB(i, j) < 1.1025) {
    return laborCostRates.hourlyRate * (20 / 60);
  } else if (sizeAB(i, j) < 2.25) {
    return laborCostRates.hourlyRate * (25 / 60);
  } else {
    return laborCostRates.hourlyRate * (30 / 60);
  }
};

const est = (i, j) => {
  return laborCost(i, j) * (1 + laborCostRates.employersSocialTax);
};

const totalPanelCost = (i, j) => {
  return bomPanel(i, j) * costsPerUnit.panelCost["15HS31"];
};

const totalFlangeCost = (i, j) => {
  return bomFlanges(i, j) * costsPerUnit.flangesCost["161/30"];
};

const totalCornerCost = () => {
  return bomCorners() * costsPerUnit.ductCornerCost["21SQ02"];
};

const totalTapeCost = () => {
  return bomTape() * costsPerUnit.tapeCost["21NS05"];
};

const totalPanelGlueCost = () => {
  return bomPanelGlue() * costsPerUnit.panelGlueCost["21CL02"];
};

const totalFlangesGlueCost = (i, j) => {
  return bomFlangeGlue(i, j) * costsPerUnit.flangesGlueCost["21CL09"];
};

const totalSealantCost = () => {
  return bomSealant() * costsPerUnit.sealantCost["21SL01"];
};

const totalDisksCost = (i, j) => {
  return bomDisks(i, j) * costsPerUnit.diskCost["21RF01"];
};

const totalScrewCost = (i, j) => {
  return bomScrews(i, j) * costsPerUnit.screwCost["21RF03"];
};

const totalReinforcementCost = (i, j) => {
  return bomReinforcement(i, j) * costsPerUnit.reinforcementCost["21RF02"];
};

const totalMaterialCost = (i, j) => {
  return (
    totalPanelCost(i, j) +
    totalFlangeCost(i, j) +
    totalCornerCost() +
    totalTapeCost() +
    totalPanelGlueCost() +
    totalFlangesGlueCost(i, j) +
    totalSealantCost() +
    totalDisksCost(i, j) +
    totalScrewCost(i, j) +
    totalReinforcementCost(i, j)
  );
};

const totalCost = (i, j) => {
  return totalMaterialCost(i, j) + est(i, j);
};

export const totalSellingPrice = (i, j) => {
  return (
    Math.round(
      (totalMaterialCost(i, j) * transportCost() +
        totalCost(i, j) * (1 + gainCost())) *
        100
    ) / 100
  );
};
