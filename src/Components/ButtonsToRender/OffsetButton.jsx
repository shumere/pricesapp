import OffsetTable from "../TablesToRender/OffsetTable";

const OffsetButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <button onClick={props.onClick}>5. Offset</button>
      </div>
      <div>{props.state6 ? "Offset" : ""}</div>
      <div>{props.state6 ? <OffsetTable /> : ""}</div>
    </div>
  );
};

export default OffsetButton;
