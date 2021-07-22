import GrillTable from "../TablesToRender/GrillTable";
import Button from "../Button";

const GrillButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick}>11. Grill</Button>
      </div>
      <div>{props.state12 ? "Grill" : ""}</div>
      <div>{props.state12 ? <GrillTable /> : ""}</div>
    </div>
  );
};

export default GrillButton;
