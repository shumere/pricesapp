import GrillTable from "../TablesToRender/GrillTable";

const GrillButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <button onClick={props.onClick}>11. Grill</button>
      </div>
      <div>{props.state12 ? "Grill" : ""}</div>
      <div>{props.state12 ? <GrillTable /> : ""}</div>
    </div>
  );
};

export default GrillButton;
