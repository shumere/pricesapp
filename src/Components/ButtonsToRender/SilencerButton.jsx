import SilencerTable from "../TablesToRender/SilencerTable";
import Button from "../Button";

const SilencerButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick}>9. Silencer</Button>
      </div>
      <div>{props.state10 ? "Silencer" : ""}</div>
      <div>{props.state10 ? <SilencerTable /> : ""}</div>
    </div>
  );
};

export default SilencerButton;
