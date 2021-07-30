import { laborCostRates } from "./LaborCostRates/laborCostRates";
import { costsPerUnitP3 } from "./CostPerUnit/costPerUnitForP3";
import {
  materialCheckForFlanges,
  materialCheckForCorner,
  materialCheckForFlangeGlue,
  transportCost,
  gainCost,
  reinforcementStep,
  sizeA,
  sizeB,
  sizeA2,
  sizeA3,
  sizeB2,
  sizeB3,
  sizeAB,
} from "./calculation";

const L1 = () => {
  return 0.15
};

const L2 = () => {
  return 0.1
};

const L3 = () => {
  return 0.1
};

const angle = 45;

const Lu = () => {
  return L1()/Math.cos(angle);
};

const So1 = (i, j, state1) => {
  return (sizeA3(i, state1) + sizeB3(j, state1))*2*L2()
}

const So2 = (i, j, state1) => {
  return (sizeA3(i, state1) + sizeB3(j, state1))*2*L3()
}

const offsetSurface = (i, j, state1) => {
  return (sizeA3(i, state1) + sizeB3(j, state1)) * 2 * Lu() + So1(i, j, state1) + So2(i, j, state1);
};

//Duct BOM

const bomPanel = (i, j, state1) => {
  let panelQ = offsetSurface(i, j, state1);
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

const bomTape = (i, j, state1) => {
  let tapeQ = Math.ceil((bomPanel(i, j, state1) / 50) * 100) / 100;
  return tapeQ;
};

const bomPanelGlue = (i, j, state1) => {
  let panelGlueQ = Math.ceil(bomPanel(i, j, state1) * 0.01 * 4 * 100) / 100;
  return panelGlueQ;
};

const bomFlangeGlue = (i, j) => {
  let flangeGlueQ = Math.ceil(((bomFlanges(i, j) * 10) / 500) * 100) / 100;
  return flangeGlueQ;
};

const bomSealant = (i, j, state1) => {
  let sealantQ = Math.ceil(bomPanel(i, j, state1) * 0.1 * 100) / 100;
  return sealantQ;
};

const bomDisks = (i, j, state1) => {
  let disksQ =
    (sizeA2(i, state1) >= 1
      ? 4 * Math.floor(sizeA2(i, state1) / reinforcementStep())
      : 0) +
    (sizeB2(j, state1) >= 1
      ? 4 * Math.floor(sizeB2(j, state1) / reinforcementStep())
      : 0);
  return disksQ;
};

const bomScrews = (i, j, state1) => {
  let screwsQ =
    (sizeA2(i, state1) >= 1
      ? 2 * Math.floor(sizeA2(i, state1) / reinforcementStep())
      : 0) +
    (sizeB2(j, state1) >= 1
      ? 2 * Math.floor(sizeB2(j, state1) / reinforcementStep())
      : 0);
  return screwsQ;
};

const bomReinforcement = (i, j, state1) => {
  let reinforcementQ =
    (sizeA2(i, state1) >= 1
      ? sizeA2(i, state1) * Math.floor(sizeA2(i, state1) / reinforcementStep())
      : 0) +
    (sizeB2(j, state1) >= 1
      ? sizeB2(j, state1) * Math.floor(sizeB2(j, state1) / reinforcementStep())
      : 0);
  return reinforcementQ;
};

//labor cost

const laborCost = (i, j, state1) => {
  if (
    state1 === "15HS31" ||
    state1 === "15HP31" ||
    state1 === "15HR31" ||
    state1 === "15HR31ABT" ||
    state1 === "15HR31PLUS" ||
    state1 === "15HK31"
  ) {
    if (sizeAB(i, j) < 0.1225) {
      return laborCostRates.hourlyRate * (40 / 60);
    } else if (sizeAB(i, j) < 0.5625) {
      return laborCostRates.hourlyRate * (45 / 60);
    } else if (sizeAB(i, j) < 1.1025) {
      return laborCostRates.hourlyRate * (50 / 60);
    } else if (sizeAB(i, j) < 2.25) {
      return laborCostRates.hourlyRate * (55 / 60);
    } else {
      return laborCostRates.hourlyRate * (65 / 60);
    }
  } else if (
    state1 === "15HB21" ||
    state1 === "15HE21" ||
    state1 === "15HN21ABT" ||
    state1 === "15HN21PLUS"
  ) {
    if (sizeAB(i, j) < 0.1225) {
      return laborCostRates.hourlyRate * (30 / 60);
    } else if (sizeAB(i, j) < 0.5625) {
      return laborCostRates.hourlyRate * (35 / 60);
    } else if (sizeAB(i, j) < 1.1025) {
      return laborCostRates.hourlyRate * (40 / 60);
    } else if (sizeAB(i, j) < 2.25) {
      return laborCostRates.hourlyRate * (45 / 60);
    } else {
      return laborCostRates.hourlyRate * (55 / 60);
    }
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

const totalFlangeCost = (i, j, state1) => {
  return bomFlanges(i, j) * materialCheckForFlanges(state1);
};

const totalCornerCost = (state1) => {
  return bomCorners() * materialCheckForCorner(state1);
};

const totalTapeCost = (i, j, state1) => {
  return bomTape(i, j, state1) * costsPerUnitP3.tapeCost["21NS05"];
};

const totalPanelGlueCost = (i, j, state1) => {
  return bomPanelGlue(i, j, state1) * costsPerUnitP3.panelGlueCost["21CL02"];
};

const totalFlangesGlueCost = (i, j, state1) => {
  return bomFlangeGlue(i, j) * materialCheckForFlangeGlue(state1);
};

const totalSealantCost = (i, j, state1) => {
  return bomSealant(i, j, state1) * costsPerUnitP3.sealantCost["21SL01"];
};

const totalDisksCost = (i, j, state1) => {
  return bomDisks(i, j, state1) * costsPerUnitP3.diskCost["21RF01"];
};

const totalScrewCost = (i, j, state1) => {
  return bomScrews(i, j, state1) * costsPerUnitP3.screwCost["21RF03"];
};

const totalReinforcementCost = (i, j, state1) => {
  return (
    bomReinforcement(i, j, state1) * costsPerUnitP3.reinforcementCost["21RF02"]
  );
};

const totalMaterialCost = (i, j, state1) => {
  return (
    totalPanelCost(i, j, state1) +
    totalMaterialLoss(i, j, state1) +
    totalFlangeCost(i, j, state1) +
    totalCornerCost(state1) +
    totalTapeCost(i, j, state1) +
    totalPanelGlueCost(i, j, state1) +
    totalFlangesGlueCost(i, j, state1) +
    totalSealantCost(i, j, state1) +
    totalDisksCost(i, j, state1) +
    totalScrewCost(i, j, state1) +
    totalReinforcementCost(i, j, state1)
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
