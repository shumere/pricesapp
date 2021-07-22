import OffsetTable from "../TablesToRender/OffsetTable";
import Button from "../Button";

const OffsetButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick}>5. Offset</Button>
      </div>
      <div>{props.state6 ? "Offset" : ""}</div>
      <div>{props.state6 ? <OffsetTable /> : ""}</div>
    </div>
  );
};

export default OffsetButton;
