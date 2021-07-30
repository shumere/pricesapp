import React from "react";
import ReducerTable from "../TablesToRender/ReducerTable.jsx";
import Button from "../Button.jsx";

const ReducerButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick} label="4. Reducer"></Button>
      </div>
      <div>{props.state5 ? <ReducerTable /> : ""}</div>
    </div>
  );
};

export default ReducerButton;
