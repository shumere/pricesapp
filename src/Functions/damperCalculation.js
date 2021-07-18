import { laborCostRates } from "./LaborCostRates/laborCostRates";
import { costsPerUnitProLam } from "./CostPerUnit/costPerUnitForProLam";
import { sizeA, sizeB, sizeAB, transportCost, gainCost } from "./calculation";

//Damper Calculation

const pd1001Size = (j) => {
  return Math.round((sizeB(j) + 0.07 + 0.003) * 1000) / 1000;
};

const pd1002Size = (i) => {
  return Math.round((sizeA(i) + 0.01 + 0.005) * 1000) / 1000;
};

const pd1000Size = (i) => {
  return Math.round((sizeA(i) - 0.001) * 1000) / 1000;
};

const pd1000Quantity = (i) => {
  return sizeA(i) / 0.1;
};

const pd1003Size = (i) => {
  return pd1002Size(i);
};

const pd1003Quantity = (j) => {
  if (sizeB(j) >= 1 && sizeB(j) < 1.5) {
    return 1;
  } else if (sizeB(j) >= 1.5) {
    return 2;
  } else {
    return 0;
  }
};

//Duct Damper BOM

const bomPD1001 = (j) => {
  return pd1001Size(j) * 2;
};

const bomPD1002 = (i) => {
  return pd1002Size(i) * 2;
};

const bomPD1000 = (i) => {
  return pd1000Size(i) * pd1000Quantity(i);
};

const bomNG001 = (j) => {
  return 4 * pd1003Quantity(j);
};

const bomNG002 = (i, j) => {
  return pd1000Quantity(i) * pd1003Quantity(j);
};

const bomNG003 = (i, j) => {
  return pd1000Quantity(i) * pd1003Quantity(j);
};

const bomNG004 = (i, j) => {
  return pd1000Quantity(i) * pd1003Quantity(j);
};

const bomNG005 = (i, j) => {
  return pd1000Quantity(i) * 2 * pd1003Quantity(j);
};
const bomNG006 = (i, j) => {
  return pd1000Quantity(i) * pd1003Quantity(j);
};

const bomAP190 = () => {
  return 1;
};

const bomA840 = () => {
  return 1;
};

const bomG0012 = (i) => {
  return (pd1000Quantity(i) + 1) * pd1000Size(i);
};

const bomPD1003 = (i, j) => {
  return pd1003Quantity(j) * pd1003Size(i);
};
//labor cost

const laborCost = (i, j) => {
  if (sizeAB(i, j) < 0.1225) {
    return laborCostRates.hourlyRate * 1.5;
  } else if (sizeAB(i, j) < 0.5625) {
    return laborCostRates.hourlyRate * 1.75;
  } else if (sizeAB(i, j) < 1.1025) {
    return laborCostRates.hourlyRate * 2;
  } else if (sizeAB(i, j) < 2.25) {
    return laborCostRates.hourlyRate * 2.25;
  } else {
    return laborCostRates.hourlyRate * 2.5;
  }
};

//Price Calculation

const est = (i, j) => {
  return laborCost(i, j) * (1 + laborCostRates.employersSocialTax);
};

const totalPD1001Cost = (j) => {
  return bomPD1001(j) * costsPerUnitProLam.damperMaterial.PD1001;
};

const totalPD1002Cost = (i) => {
  return bomPD1002(i) * costsPerUnitProLam.damperMaterial.PD1002;
};

const totalPD1000Cost = (i) => {
  return bomPD1000(i) * costsPerUnitProLam.damperMaterial.PD1000;
};

const totalNG001Cost = (i) => {
  return bomNG001(i) * costsPerUnitProLam.damperMaterial.NG001;
};

const totalNG002Cost = (i) => {
  return bomNG002(i) * costsPerUnitProLam.damperMaterial.NG002;
};

const totalNG003Cost = (i) => {
  return bomNG003(i) * costsPerUnitProLam.damperMaterial.NG003;
};

const totalNG004Cost = (i) => {
  return bomNG004(i) * costsPerUnitProLam.damperMaterial.NG004;
};

const totalNG005Cost = (i) => {
  return bomNG005(i) * costsPerUnitProLam.damperMaterial.NG005;
};

const totalNG006Cost = (i) => {
  return bomNG006(i) * costsPerUnitProLam.damperMaterial.NG006;
};

const totalAP190Cost = () => {
  return bomAP190() * costsPerUnitProLam.damperMaterial.AP190;
};

const totalA840Cost = () => {
  return bomA840() * costsPerUnitProLam.damperMaterial.A840;
};

const totalG0012Cost = (i) => {
  return bomG0012(i) * costsPerUnitProLam.damperMaterial.G0012;
};

const totalPD1003Cost = (i, j) => {
  return bomPD1003(i, j) * costsPerUnitProLam.damperMaterial.PD1003;
};

const totalMaterialCost = (i, j, state1) => {
  return (
    totalPD1000Cost(i) +
    totalPD1001Cost(j) +
    totalPD1002Cost(i) +
    totalNG001Cost(i) +
    totalNG002Cost(i) +
    totalNG003Cost(i) +
    totalNG004Cost(i) +
    totalNG005Cost(i) +
    totalNG006Cost(i) +
    totalAP190Cost() +
    totalA840Cost() +
    totalG0012Cost(i) +
    totalPD1003Cost(i, j)
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
