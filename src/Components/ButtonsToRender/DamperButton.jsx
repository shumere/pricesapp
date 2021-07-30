import React from "react";
import DamperTable from "../TablesToRender/DamperTable.jsx";
import Button from "../Button.jsx";

const DamperButton = (props) => {
  return (
    <div>
      <div>
        <Button onClick={props.onClick} label="10. Damper"></Button>
      </div>
      <div>{props.state11 ? <DamperTable /> : ""}</div>
    </div>
  );
};

export default DamperButton;
