//Material Type List

const material = {
  thickness: {
    "20mm": 20,
    "30mm": 30,
  },
  millerSpace: {
    "20mm": 26,
    "30mm": 36,
  },
  // panelType: {
  //   "15HB21": "15HB21",
  //   "15HS31": "15HS31",
  // },
  // flangesType: {
  //   161: "161",
  //   "161/30": "161/30",
  // },
  // ductAngleType: {
  //   "21SQ01": "21SQ01",
  //   "21SQ02": "21SQ02",
  // },
};

const costsPerUnit = {
  panelCost: {
    "15HB21": 5,
    "15HE21" : 9.44,
    "15HN21ABT" : 11,
    "15HN21PLUS" : 12.65,
    "15HS31": 9,
    "15HP31" : 8.9,
    "15HR31" : 14,
    "15HR31ABT" : 13.5,
    "15HR31PLUS" : 15.525,
    "15HK31" : 13.75
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

//Material check for thickness

const materialCheckForThickness = (state1) => {
  if (state1 === "15HS31" || state1 === "15HP31" ||  state1 === "15HR31" || state1 === "15HR31ABT" || state1 === "15HR31PLUS" || state1 === "15HK31") {
    return (material.thickness["30mm"] / 1000) * 2;
  } else if (state1 === "15HB21" || state1 === "15HE21" || state1 === "15HN21ABT" || state1 === "15HN21PLUS") {
    return (material.thickness["20mm"] / 1000) * 2;
  } else {
    return 0;
  }
};

// const materialCheckForPanel = (state1) => {
//   if (state1 === "15HS31") {
//     return costsPerUnit.panelCost["15HS31"];
//   } else if (state1 === "15HB21") {
//     return costsPerUnit.panelCost["15HB21"];
//   } else {
//     return 0;
//   }
// };

const materialCheckForFlanges = (state1) => {
  if (state1 === "15HS31" || state1 === "15HP31" ||  state1 === "15HR31" || state1 === "15HR31ABT" || state1 === "15HR31PLUS" || state1 === "15HK31") {
    return costsPerUnit.flangesCost["161/30"];
  } else if (state1 === "15HB21" || state1 === "15HE21" || state1 === "15HN21ABT" || state1 === "15HN21PLUS") {
    return costsPerUnit.flangesCost[161];
  } else {
    return 0;
  }
};

const materialCheckForCorner = (state1) => {
  if (state1 === "15HS31" || state1 === "15HP31" ||  state1 === "15HR31" || state1 === "15HR31ABT" || state1 === "15HR31PLUS" || state1 === "15HK31") {
    return costsPerUnit.ductCornerCost["21SQ02"];
  } else if (state1 === "15HB21" || state1 === "15HE21" || state1 === "15HN21ABT" || state1 === "15HN21PLUS") {
    return costsPerUnit.ductCornerCost["21SQ01"];
  } else {
    return 0;
  }
};

const materialCheckForFlangeGlue = (state1) => {
  if (state1 === "15HS31" || state1 === "15HP31" ||  state1 === "15HR31" || state1 === "15HR31ABT" || state1 === "15HR31PLUS" || state1 === "15HK31") {
    return costsPerUnit.flangesGlueCost["21CL09"];
  } else if (state1 === "15HB21" || state1 === "15HE21" || state1 === "15HN21ABT" || state1 === "15HN21PLUS") {
    return costsPerUnit.flangesGlueCost["21CL08"];
  } else {
    return 0;
  }
};

//Duct Calculation

export const tableValueForTheRow = (i) => {
  return (i *= 100);
};

export const tableValueForTheFirstColumn = (j) => {
  return (j *= 100);
};

const sizeA = (i) => {
  let a = tableValueForTheRow(i) / 1000;
  return a;
};

// const sizeA2 = (i, state1) => {
//   let a2 = sizeA(i) + (state1 === "15HS31" ? ((material.thickness["30mm"] / 1000) * 2) : ((material.thickness["20mm"] / 1000) * 2));
//   return a2;
// };

const sizeA2 = (i, state1) => {
  let a2 = sizeA(i) + materialCheckForThickness(state1);
  return a2;
};

//SizeA3 is for fittings
const sizeA3 = (i) => {
  let a3 = sizeA2(i) + (material.millerSpace["30mm"] / 1000) * 2;
  return a3;
};

const sizeB = (j) => {
  let b = tableValueForTheFirstColumn(j) / 1000;
  return b;
};

const sizeB2 = (j, state1) => {
  let b2 = sizeB(j) + materialCheckForThickness(state1);
  return b2;
};

//SizeB3 is for fittings
const sizeB3 = (j) => {
  let b3 = sizeB2(j) + (material.millerSpace["30mm"] / 1000) * 2;
  return b3;
};

const ductLength = () => 1.2;

const ductSurface = (i, j, state1) => {
  return (
    Math.ceil(
      (sizeA2(i, state1) + sizeB2(j, state1)) * 2 * ductLength() * 1000
    ) / 1000
  );
};

const reinforcementStep = () => 0.75;

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

//Profit Rates

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

//Price Calculation

const est = (i, j) => {
  return laborCost(i, j) * (1 + laborCostRates.employersSocialTax);
};

const totalPanelCost = (i, j, state1) => {
  return bomPanel(i, j, state1) * costsPerUnit.panelCost[state1];
};

const totalFlangeCost = (i, j, state1) => {
  return bomFlanges(i, j) * materialCheckForFlanges(state1);
};

const totalCornerCost = (state1) => {
  return bomCorners() * materialCheckForCorner(state1);
};

const totalTapeCost = () => {
  return bomTape() * costsPerUnit.tapeCost["21NS05"];
};

const totalPanelGlueCost = () => {
  return bomPanelGlue() * costsPerUnit.panelGlueCost["21CL02"];
};

const totalFlangesGlueCost = (i, j, state1) => {
  return bomFlangeGlue(i, j) * materialCheckForFlangeGlue(state1);
};

const totalSealantCost = () => {
  return bomSealant() * costsPerUnit.sealantCost["21SL01"];
};

const totalDisksCost = (i, j, state1) => {
  return bomDisks(i, j, state1) * costsPerUnit.diskCost["21RF01"];
};

const totalScrewCost = (i, j, state1) => {
  return bomScrews(i, j, state1) * costsPerUnit.screwCost["21RF03"];
};

const totalReinforcementCost = (i, j, state1) => {
  return (
    bomReinforcement(i, j, state1) * costsPerUnit.reinforcementCost["21RF02"]
  );
};

const totalMaterialCost = (i, j, state1) => {
  return (
    totalPanelCost(i, j, state1) +
    totalFlangeCost(i, j, state1) +
    totalCornerCost(state1) +
    totalTapeCost() +
    totalPanelGlueCost() +
    totalFlangesGlueCost(i, j, state1) +
    totalSealantCost() +
    totalDisksCost(i, j, state1) +
    totalScrewCost(i, j, state1) +
    totalReinforcementCost(i, j, state1)
  );
};

const totalCost = (i, j, state1) => {
  return totalMaterialCost(i, j, state1) + est(i, j);
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
