import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMaterialType, clickDuct, materialType, showDuct } from "./index";
import {
  tableValueForTheRow,
  tableValueForTheFirstColumn,
  cellContent,
} from "./Functions/ductCalculation";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  let state1 = useSelector(materialType);
  let state2 = useSelector(showDuct);
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

  const clickResetButton = () => {
    dispatch(changeMaterialType("Undefined"))
  }
  
  const clickButton15HS31 = () => {
    dispatch(changeMaterialType("15HS31"));
  };

  const clickButton15HP31 = () => {
    dispatch(changeMaterialType("15HP31"));
  };

  const clickButton15HR31 = () => {
    dispatch(changeMaterialType("15HR31"));
  };

  const clickButton15HR31ABT = () => {
    dispatch(changeMaterialType("15HR31ABT"));
  };

  const clickButton15HR31PLUS = () => {
    dispatch(changeMaterialType("15HR31PLUS"));
  };

  const clickButton15HK31 = () => {
    dispatch(changeMaterialType("15HK31"));
  };

  const clickButton15HB21 = () => {
    dispatch(changeMaterialType("15HB21"));
  };

  const clickButton15HE21 = () => {
    dispatch(changeMaterialType("15HE21"));
  };

  const clickButton15HN21ABT = () => {
    dispatch(changeMaterialType("15HN21ABT"));
  };

  const clickButton15HN21PLUS = () => {
    dispatch(changeMaterialType("15HN21PLUS"));
  };
  
  

  const clickButtonDuct = () => {
    dispatch(clickDuct(!state2));
  };

  //==========
  //Render 2nd Button

  const renderButton2 = () => {
    if (state1) {
      return (
        <div>
          <div className="clickButton">
            <button onClick={() => clickButtonDuct()}>2. Duct</button>
          </div>
          <div>{state2 ? "Duct" : ""}</div>
        </div>
      );
    }
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
        {j === 1 ? tableValueForTheFirstColumn(i) : state1 !== "Undefined" ? `${cellContent(i, j - 1, state1)}€` : "N/A"}
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

  const renderTable = () => {
    if (state2) {
      return (
        <div>
          <table>
            <caption>Duct</caption>
            <thead>{renderTableRowWithHeads(21)}</thead>
            {renderTableRowsWithData(21)}
          </table>
        </div>
      );
    }
  };

  return (
    <div style={{ fontSize: "2rem" }} className="App">
      <button onClick={()=> clickResetButton()}>Reset</button>
      <button onClick={() => clickButton15HS31()}>
        1. 15HS31
      </button>
      <button onClick={() => clickButton15HP31()}>
        2. 15HP31
      </button>
      <button onClick={() => clickButton15HR31()}>
        3. 15HR31
      </button>
      <button onClick={() => clickButton15HR31ABT()}>
        4. 15HR31ABT
      </button>
      <button onClick={() => clickButton15HR31PLUS()}>
        5. 15HR31PLUS
      </button>
      <button onClick={() => clickButton15HK31()}>
        6. 15HK31
      </button>
      <button onClick={() => clickButton15HB21()}>
        7. 15HB21
      </button>
      <button onClick={() => clickButton15HE21()}>
        8. 15HE21
      </button>
      <button onClick={() => clickButton15HN21ABT()}>
        9. 15HN21ABT
      </button>
      <button onClick={() => clickButton15HN21PLUS()}>
        10. 15HN21PLUS
      </button>
      <p>{`Current state is: ${state1}`}</p>
      <div>{renderButton2()}</div>
      <div>{renderTable()}</div>
    </div>
  );
}

export default App