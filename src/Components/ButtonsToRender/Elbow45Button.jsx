import Elbow45Table from "../TablesToRender/Elbow45Table";
import Button from "../Button";

const Elbow45Button = (props) => {
  return (
    <div>
      <div className="clickButton">
        <Button onClick={props.onClick}>3. Elbow45</Button>
      </div>
      <div>{props.state4 ? "Elbow45" : ""}</div>
      <div>{props.state4 ? <Elbow45Table /> : ""}</div>
    </div>
  );
};

export default Elbow45Button;
