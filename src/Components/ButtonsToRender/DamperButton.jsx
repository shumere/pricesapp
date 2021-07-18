import DamperTable from "../TablesToRender/DamperTable";

const DamperButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <button onClick={props.onClick}>10. Damper</button>
      </div>
      <div>{props.state11 ? "Damper" : ""}</div>
      <div>{props.state11 ? <DamperTable /> : ""}</div>
    </div>
  );
};

export default DamperButton;
