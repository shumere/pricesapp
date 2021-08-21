import React from "react";
import { useSelector } from "react-redux";
import { materialType, showReducer } from "../../Reducer/buttonSlice.ts";
import { cellContent } from "../../Functions/reducerCalculation.js";
import {
  tableValueForTheRow,
  tableValueForTheFirstColumn,
} from "../../Functions/calculation.js";

//Render Duct Table
//Render 1st row as a table head

const ReducerTable = () => {
  let state1 = useSelector(materialType);
  let state2 = useSelector(showReducer);

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
      <td key={j === 1 ? i : i + j} style={j === 1 ? {"fontWeight": "bold"} : {}}>
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

  const renderReducerTable = () => {
    if (state2) {
      return (
        <div>
          <table>
            <caption>Reducer</caption>
            <thead>{renderTableRowWithHeads(21)}</thead>
            {renderTableRowsWithData(21)}
          </table>
        </div>
      );
    }
  };

  return renderReducerTable();
};

export default ReducerTable;
