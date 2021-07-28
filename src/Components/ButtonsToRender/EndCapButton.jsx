import EndCapTable from "../TablesToRender/EndCapTable";
import Button from "../Button";

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
