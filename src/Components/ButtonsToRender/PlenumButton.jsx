import React from "react";
import PlenumTable from "../TablesToRender/PlenumTable.jsx";
import Button from "../Button.jsx";

const PlenumButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick} label="8. Plenum"></Button>
      </div>
      <div>{props.state9 ? <PlenumTable /> : ""}</div>
    </div>
  );
};
export default PlenumButton;
