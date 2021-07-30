import React from "react";
import DuctTable from "../TablesToRender/DuctTable.jsx";
import Button from "../Button.jsx";

const DuctButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick} label="1. Duct"></Button>
      </div>
      <div>{props.state2 ? <DuctTable /> : ""}</div>
    </div>
  );
};

export default DuctButton;
