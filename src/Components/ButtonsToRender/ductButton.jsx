import DuctTable from "../TablesToRender/DuctTable";

const DuctButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <button onClick={props.onClick}>1. Duct</button>
      </div>
      <div>{props.state2 ? "Duct" : ""}</div>
      <div>{props.state2 ? <DuctTable /> : ""}</div>
    </div>
  );
};

export default DuctButton;
