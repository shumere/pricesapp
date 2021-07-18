import SilencerTable from "../TablesToRender/SilencerTable";

const SilencerButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <button onClick={props.onClick}>9. Silencer</button>
      </div>
      <div>{props.state10 ? "Silencer" : ""}</div>
      <div>{props.state10 ? <SilencerTable /> : ""}</div>
    </div>
  );
};

export default SilencerButton;
