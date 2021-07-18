import Elbow90Table from "../TablesToRender/Elbow90Table";

const Elbow90Button = (props) => {
  return (
    <div>
      <div className="clickButton">
        <button onClick={props.onClick}>2. Elbow90</button>
      </div>
      <div>{props.state3 ? "Elbow90" : ""}</div>
      <div>{props.state3 ? <Elbow90Table /> : ""}</div>
    </div>
  );
};

export default Elbow90Button;
