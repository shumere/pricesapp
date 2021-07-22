import EndCapTable from "../TablesToRender/EndCapTable";
import Button from "../Button";

const EndCapButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick}>7. EndCap</Button>
      </div>
      <div>{props.state8 ? "EndCap" : ""}</div>
      <div>{props.state8 ? <EndCapTable /> : ""}</div>
    </div>
  );
};

export default EndCapButton;
