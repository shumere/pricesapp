import React from "react";
import OffsetTable from "../TablesToRender/OffsetTable.jsx";
import Button from "../Button.jsx";

const OffsetButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick} label="5. Offset"></Button>
      </div>
      <div>{props.state6 ? <OffsetTable /> : ""}</div>
    </div>
  );
};

export default OffsetButton;
