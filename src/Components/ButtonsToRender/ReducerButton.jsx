import ReducerTable from "../TablesToRender/ReducerTable";

const ReducerButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <button onClick={props.onClick}>4. Reducer</button>
      </div>
      <div>{props.state5 ? "Reducer" : ""}</div>
      <div>{props.state5 ? <ReducerTable /> : ""}</div>
    </div>
  );
};

export default ReducerButton;
