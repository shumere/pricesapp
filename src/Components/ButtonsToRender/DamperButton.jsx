import DamperTable from "../TablesToRender/DamperTable";
import Button from "../Button";

const DamperButton = (props) => {
  return (
    <div>
      <div>
        <Button onClick={props.onClick} label="10. Damper"></Button>
      </div>
      <div>{props.state11 ? <DamperTable /> : ""}</div>
    </div>
  );
};

export default DamperButton;
