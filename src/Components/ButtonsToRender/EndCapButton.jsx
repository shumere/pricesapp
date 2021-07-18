import EndCapTable from "../TablesToRender/EndCapTable";

const EndCapButton = (props) => {
  return (
    <div>
      <div className="clickButton">
        <button onClick={props.onClick}>7. EndCap</button>
      </div>
      <div>{props.state8 ? "EndCap" : ""}</div>
      <div>{props.state8 ? <EndCapTable /> : ""}</div>
    </div>
  );
};

export default EndCapButton;
