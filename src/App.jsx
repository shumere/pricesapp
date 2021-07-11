import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMaterialType,
  clickDuct,
  clickElbow90,
  clickElbow45,
  clickReducer,
  clickOffset,
  clickTee,
  clickEndCap,
  clickPlenum,
  materialType,
  showDuct,
  showElbow90,
  showElbow45,
  showReducer,
  showOffset,
  showTee,
  showEndCap,
  showPlenum
} from "./index";
import DuctTable from "./Components/DuctTable.jsx";
import Elbow90Table from "./Components/Elbow90Table";
import Elbow45Table from "./Components/Elbow45Table";
import ReducerTable from "./Components/ReducerTable";
import OffsetTable from "./Components/OffsetTable";
import TeeTable from "./Components/TeeTable";
import EndCapTable from "./Components/EndCapTable";
import PlenumTable from "./Components/PlenumTable";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  let state1 = useSelector(materialType);
  let state2 = useSelector(showDuct);
  let state3 = useSelector(showElbow90);
  let state4 = useSelector(showElbow45);
  let state5 = useSelector(showReducer);
  let state6 = useSelector(showOffset);
  let state7 = useSelector(showTee);
  let state8 = useSelector(showEndCap);
  let state9 = useSelector(showPlenum);
  console.log(`Current state1 is: ${state1}`);
  console.log(`Current state2 is: ${state2}`);
  console.log(`Current state3 is: ${state3}`);
  console.log(`Current state4 is: ${state4}`);
  console.log(`Current state5 is: ${state5}`);
  console.log(`Current state6 is: ${state6}`);
  console.log(`Current state7 is: ${state7}`);
  console.log(`Current state8 is: ${state8}`);
  console.log(`Current state9 is: ${state9}`);
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

  const clickButtonElbow45 = () => {
    dispatch(clickElbow45(!state4));
  };

  const clickButtonReducer = () => {
    dispatch(clickReducer(!state5));
  };

  const clickButtonOffset = () => {
    dispatch(clickOffset(!state6));
  };

  const clickButtonTee = () => {
    dispatch(clickTee(!state7));
  };

  const clickButtonEndCap = () => {
    dispatch(clickEndCap(!state8));
  };

  const clickButtonPlenum = () => {
    dispatch(clickPlenum(!state9));
  };

  //==========
  //Render 2nd Buttons

  const renderDuctButton = () => {
    return (
      <div>
        <div className="clickButton">
          <button onClick={() => clickButtonDuct()}>1. Duct</button>
        </div>
        <div>{state2 ? "Duct" : ""}</div>
        <div>{state2 ? <DuctTable /> : ""}</div>
      </div>
    );
  };

  const renderElbow90Button = () => {
    return (
      <div>
        <div className="clickButton">
          <button onClick={() => clickButtonElbow90()}>2. Elbow90</button>
        </div>
        <div>{state3 ? "Elbow90" : ""}</div>
        <div>{state3 ? <Elbow90Table /> : ""}</div>
      </div>
    );
  };

  const renderElbow45Button = () => {
    return (
      <div>
        <div className="clickButton">
          <button onClick={() => clickButtonElbow45()}>3. Elbow45</button>
        </div>
        <div>{state4 ? "Elbow45" : ""}</div>
        <div>{state4 ? <Elbow45Table /> : ""}</div>
      </div>
    );
  };

  const renderReducerButton = () => {
    return (
      <div>
        <div className="clickButton">
          <button onClick={() => clickButtonReducer()}>4. Reducer</button>
        </div>
        <div>{state5 ? "Reducer" : ""}</div>
        <div>{state5 ? <ReducerTable /> : ""}</div>
      </div>
    );
  };

  const renderOffsetButton = () => {
    return (
      <div>
        <div className="clickButton">
          <button onClick={() => clickButtonOffset()}>5. Offset</button>
        </div>
        <div>{state6 ? "Offset" : ""}</div>
        <div>{state6 ? <OffsetTable /> : ""}</div>
      </div>
    );
  };

  const renderTeeButton = () => {
    return (
      <div>
        <div className="clickButton">
          <button onClick={() => clickButtonTee()}>6. Tee</button>
        </div>
        <div>{state7 ? "Tee" : ""}</div>
        <div>{state7 ? <TeeTable /> : ""}</div>
      </div>
    );
  };

  const renderEndCapButton = () => {
    return (
      <div>
        <div className="clickButton">
          <button onClick={() => clickButtonEndCap()}>7. EndCap</button>
        </div>
        <div>{state8 ? "EndCap" : ""}</div>
        <div>{state8 ? <EndCapTable /> : ""}</div>
      </div>
    );
  };

  const renderPlenumButton = () => {
    return (
      <div>
        <div className="clickButton">
          <button onClick={() => clickButtonPlenum()}>8. Plenum</button>
        </div>
        <div>{state9 ? "Plenum" : ""}</div>
        <div>{state9 ? <PlenumTable /> : ""}</div>
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
      <p>{`Elbow90 state is: ${state4}`}</p>
      <p>{`Reducer state is: ${state5}`}</p>
      <p>{`Offset state is: ${state6}`}</p>
      <p>{`Tee state is: ${state7}`}</p>
      <p>{`EndCap state is: ${state8}`}</p>
      <p>{`Plenum state is: ${state9}`}</p>
      <div>{renderDuctButton()}</div>
      <div>{renderElbow90Button()}</div>
      <div>{renderElbow45Button()}</div>
      <div>{renderReducerButton()}</div>
      <div>{renderOffsetButton()}</div>
      <div>{renderTeeButton()}</div>
      <div>{renderEndCapButton()}</div>
      <div>{renderPlenumButton()}</div>
    </div>
  );
}

export default App;
