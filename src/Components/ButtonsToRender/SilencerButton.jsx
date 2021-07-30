import React from "react";
import SilencerTable from "../TablesToRender/SilencerTable.jsx";
import Button from "../Button.jsx";

const SilencerButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick} label="9. Silencer"></Button>
      </div>
      <div>{props.state10 ? <SilencerTable /> : ""}</div>
    </div>
  );
};

export default SilencerButton;
