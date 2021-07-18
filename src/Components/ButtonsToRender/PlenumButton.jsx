import PlenumTable from "../TablesToRender/PlenumTable";

const PlenumButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <button onClick={props.onClick}>8. Plenum</button>
      </div>
      <div>{props.state9 ? "Plenum" : ""}</div>
      <div>{props.state9 ? <PlenumTable /> : ""}</div>
    </div>
  );
};
export default PlenumButton;
