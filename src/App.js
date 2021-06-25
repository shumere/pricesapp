import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkButton, clickButton, selectState1, selectState2 } from "./index";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  let state1 = useSelector(selectState1);
  let state2 = useSelector(selectState2);
  console.log(`Current state1 is: ${state1}`);
  console.log(`Current state2 is: ${state2}`);
  // const CLICKBUTTON = "buttons/clickButton";
  // const CHECKBUTTON = "buttons/checkButton";

  // const changeFirstState = () => {
  //   return {
  //     type: CHECKBUTTON,
  //     payload: !state1,
  //   };
  // };

  // const changeSecondState = () => {
  //   return {
  //     type: CLICKBUTTON,
  //     payload: !state2,
  //   };
  // };

  // const clickButton1 = () => {
  //   dispatch(changeFirstState());
  // };

  // const clickButton2 = () => {
  //   dispatch(changeSecondState());
  // };

  const clickButton1 = () => {
    dispatch(checkButton(!state1));
  };

  const clickButton2 = () => {
    dispatch(clickButton(!state2));
  };

  //==========
  //Render 2nd Button

  const renderButton2 = () => {
    if (state1) {
      return (
        <div>
          <div className="clickButton">
            <button onClick={() => clickButton2()}>
              2. Click me to render something.
            </button>
          </div>
          <div>{state2 ? "Button is clicked." : "Button is not clicked."}</div>
        </div>
      );
    }
  };

  //==========
  //Cell content

  const tableValueForTheRow = (i) => {
    return (i *= 100);
  };

  const tableValueForTheFirstColumn = (j) => {
    return (j *= 100);
  };

  //This one cell value is only for test
  const cellContent = (i, j) => {
    return (
      tableValueForTheRow(i-1) + tableValueForTheFirstColumn(j)
    )
  };

  //==========
  //Render 1st row as a table head

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
        {j === 1 ? tableValueForTheFirstColumn(i) : cellContent(i, j)}
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

  // const renderTableCellsWithData = (cellValue) => {
  //   return renderTableCells(cellValue);
  // };

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

  const renderTable = () => {
    if (state1 && state2) {
      return (
        <div>
          <table>
            <caption>Ducts</caption>
            <thead>{renderTableRowWithHeads(21)}</thead>
            {renderTableRowsWithData(21)}
          </table>
        </div>
      );
    }
  };

  return (
    <div style={{ fontSize: "2rem" }} className="App">
      <button onClick={() => clickButton1()}>
        {state1 ? "1. 2nd button is Active" : "1. 2nd button is NOT active"}
      </button>
      <div>{renderButton2()}</div>
      <div>{renderTable()}</div>
    </div>
  );
}

export default App;
