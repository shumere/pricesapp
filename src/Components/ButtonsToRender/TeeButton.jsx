import TeeTable from "../TablesToRender/TeeTable";


const TeeButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <button onClick={props.onClick}>6. Tee</button>
      </div>
      <div>{props.state7 ? "Tee" : ""}</div>
      <div>{props.state7 ? <TeeTable /> : ""}</div>
    </div>
  );
};

export default TeeButton;
