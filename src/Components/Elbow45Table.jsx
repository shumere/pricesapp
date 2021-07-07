import React from "react";
import { useSelector } from "react-redux";
import { materialType, showElbow45 } from "../index.jsx";
import { cellContent } from "../Functions/elbow45Calculation";
import {
  tableValueForTheRow,
  tableValueForTheFirstColumn,
} from "../Functions/calculation.js";

//Render Duct Table
//Render 1st row as a table head

const Elbow90Table = () => {
  let state1 = useSelector(materialType);
  let state2 = useSelector(showElbow45);

  const renderTableHead = (i) => {
    return <th key={i}>{i === 0 ? "0" : tableValueForTheRow(i)}</th>;
  };

  const renderTableHeads = (n) => {
    let tableHeads = [];
    for (let i = 0; i < n; i++) {
      tableHeads.push(renderTableHead(i));
    }
    return tableHeads;
  };

  const renderTableRowWithHeads = (i) => {
    return <tr>{renderTableHeads(i)}</tr>;
  };

  //==========
  //Render all other rows, where only 1st cell will have the same number
  //as it is in the table head row

  const renderTableData = (cellValue, j) => {
    let i = cellValue;
    return (
      <td key={j === 1 ? i : i + j}>
        {j === 1
          ? tableValueForTheFirstColumn(i)
          : state1 !== "Undefined"
          ? `${cellContent(i, j - 1, state1)}€`
          : "N/A"}
      </td>
    );
  };

  const renderTableCells = (cellValue) => {
    let tableCells = [];
    for (let j = 1; j < 22; j++) {
      tableCells.push(renderTableData(cellValue, j));
    }
    return tableCells;
  };

  const renderTableRow = (cellValue) => {
    return <tr key={cellValue}>{renderTableCells(cellValue)}</tr>;
  };

  const renderTableRows = (n) => {
    let tableRows = [];
    let a = [];
    for (let i = 1; i < n; i++) {
      let cellValue = a.push(i);
      tableRows.push(renderTableRow(cellValue));
    }
    return tableRows;
  };

  const renderTableRowsWithData = (i) => {
    return <tbody>{renderTableRows(i)}</tbody>;
  };

  //==========
  //Render the whole table

  const renderElbow90Table = () => {
    if (state2) {
      return (
        <div>
          <table>
            <caption>Elbow90</caption>
            <thead>{renderTableRowWithHeads(21)}</thead>
            {renderTableRowsWithData(21)}
          </table>
        </div>
      );
    }
  };

  return renderElbow90Table();
};

export default Elbow90Table;
