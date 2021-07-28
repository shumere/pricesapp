import TeeTable from "../TablesToRender/TeeTable";
import Button from "../Button";

const TeeButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick} label="6. Tee"></Button>
      </div>
      <div>{props.state7 ? <TeeTable /> : ""}</div>
    </div>
  );
};

export default TeeButton;
