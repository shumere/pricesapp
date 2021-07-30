import React from "react";
import Elbow45Table from "../TablesToRender/Elbow45Table.jsx";
import Button from "../Button.jsx";

const Elbow45Button = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick} label="3. Elbow45"></Button>
      </div>
      <div>{props.state4 ? <Elbow45Table /> : ""}</div>
    </div>
  );
};

export default Elbow45Button;
