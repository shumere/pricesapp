import React from "react";
import GrillTable from "../TablesToRender/GrillTable.jsx";
import Button from "../Button.jsx";

const GrillButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick} label="11. Grill"></Button>
      </div>
      <div>{props.state12 ? <GrillTable /> : ""}</div>
    </div>
  );
};

export default GrillButton;
