import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMaterialType, clickDuct, clickElbow90, materialType, showDuct, showElbow90 } from "./index";
import DuctTable from "./Components/DuctTable.jsx";
import Elbow90Table from "./Components/Elbow90Table";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  let state1 = useSelector(materialType);
  let state2 = useSelector(showDuct);
  let state3 = useSelector(showElbow90)
  console.log(`Current state1 is: ${state1}`);
  console.log(`Current state2 is: ${state2}`);
  console.log(`Current state3 is: ${state3}`);
  // const CLICKBUTTON = "buttons/clickButton";
  // const CHECKBUTTON = "buttons/checkButton";

  // const changeFirstState = () => {
  //   return {
  //     type: CHECKBUTTON,
  //     payload: !state1,
  //   };
  // };

  // const changeSecondState = () => {
  //   return {
  //     type: CLICKBUTTON,
  //     payload: !state2,
  //   };
  // };

  // const clickButton1 = () => {
  //   dispatch(changeFirstState());
  // };

  // const clickButton2 = () => {
  //   dispatch(changeSecondState());
  // };

  const clickResetButton = () => {
    dispatch(changeMaterialType("Undefined"));
  };

  const clickButton15HS31 = () => {
    dispatch(changeMaterialType("15HS31"));
  };

  const clickButton15HP31 = () => {
    dispatch(changeMaterialType("15HP31"));
  };

  const clickButton15HR31 = () => {
    dispatch(changeMaterialType("15HR31"));
  };

  const clickButton15HR31ABT = () => {
    dispatch(changeMaterialType("15HR31ABT"));
  };

  const clickButton15HR31PLUS = () => {
    dispatch(changeMaterialType("15HR31PLUS"));
  };

  const clickButton15HK31 = () => {
    dispatch(changeMaterialType("15HK31"));
  };

  const clickButton15HB21 = () => {
    dispatch(changeMaterialType("15HB21"));
  };

  const clickButton15HE21 = () => {
    dispatch(changeMaterialType("15HE21"));
  };

  const clickButton15HN21ABT = () => {
    dispatch(changeMaterialType("15HN21ABT"));
  };

  const clickButton15HN21PLUS = () => {
    dispatch(changeMaterialType("15HN21PLUS"));
  };

  const clickButtonDuct = () => {
    dispatch(clickDuct(!state2));
  };

  const clickButtonElbow90 = () => {
    dispatch(clickElbow90(!state3));
  };

  //==========
  //Render 2nd Button

  const renderButton2 = () => {
    return (
      <div>
        <div className="clickButton">
          <button onClick={() => clickButtonDuct()}>2. Duct</button>
        </div>
        <div>{state2 ? "Duct" : ""}</div>
        <div>{state2 ? <DuctTable /> : ""}</div>
      </div>
    );
  };

  const renderButton3 = () => {
    return (
      <div>
        <div className="clickButton">
          <button onClick={() => clickButtonElbow90()}>3. Elbow90</button>
        </div>
        <div>{state3 ? "Elbow90" : ""}</div>
        <div>{state3 ? <Elbow90Table /> : ""}</div>
      </div>
    );
  };

  

  return (
    <div style={{ fontSize: "2rem" }} className="App">
      <button onClick={() => clickResetButton()}>Reset</button>
      <button onClick={() => clickButton15HS31()}>1. 15HS31</button>
      <button onClick={() => clickButton15HP31()}>2. 15HP31</button>
      <button onClick={() => clickButton15HR31()}>3. 15HR31</button>
      <button onClick={() => clickButton15HR31ABT()}>4. 15HR31ABT</button>
      <button onClick={() => clickButton15HR31PLUS()}>5. 15HR31PLUS</button>
      <button onClick={() => clickButton15HK31()}>6. 15HK31</button>
      <button onClick={() => clickButton15HB21()}>7. 15HB21</button>
      <button onClick={() => clickButton15HE21()}>8. 15HE21</button>
      <button onClick={() => clickButton15HN21ABT()}>9. 15HN21ABT</button>
      <button onClick={() => clickButton15HN21PLUS()}>10. 15HN21PLUS</button>
      <p>{`Current state is: ${state1}`}</p>
      <p>{`Duct state is: ${state2}`}</p>
      <p>{`Elbow90 state is: ${state3}`}</p>
      <div>{renderButton2()}</div>
      <div>{renderButton3()}</div>
    </div>
  );
}

export default App;
