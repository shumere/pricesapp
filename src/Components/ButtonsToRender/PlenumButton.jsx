import PlenumTable from "../TablesToRender/PlenumTable";
import Button from "../Button";

const PlenumButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick}>8. Plenum</Button>
      </div>
      <div>{props.state9 ? "Plenum" : ""}</div>
      <div>{props.state9 ? <PlenumTable /> : ""}</div>
    </div>
  );
};
export default PlenumButton;
