import DamperTable from "../TablesToRender/DamperTable";
import Button from "../Button";

const DamperButton = (props) => {
  return (
    <div>
      <div>
        <Button onClick={props.onClick}>10. Damper</Button>
      </div>
      <div>{props.state11 ? "Damper" : ""}</div>
      <div>{props.state11 ? <DamperTable /> : ""}</div>
    </div>
  );
};

export default DamperButton;
