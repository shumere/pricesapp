import React from "react";
import EndCapTable from "../TablesToRender/EndCapTable.jsx";
import Button from "../Button.jsx";

const EndCapButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick} label="7. EndCap"></Button>
      </div>
      <div>{props.state8 ? <EndCapTable /> : ""}</div>
    </div>
  );
};

export default EndCapButton;
