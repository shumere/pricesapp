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
  clickSilencer,
  clickDamper,
  clickGrill,
  materialType,
  showDuct,
  showElbow90,
  showElbow45,
  showReducer,
  showOffset,
  showTee,
  showEndCap,
  showPlenum,
  showSilencer,
  showDamper,
  showGrill,
} from "../Reducer/buttonSlice";
import DuctButton from "../Components/ButtonsToRender/DuctButton.jsx";
import Elbow90Button from "../Components/ButtonsToRender/Elbow90Button.jsx";
import Elbow45Button from "../Components/ButtonsToRender/Elbow45Button.jsx";
import ReducerButton from "../Components/ButtonsToRender/ReducerButton.jsx";
import OffsetButton from "../Components/ButtonsToRender/OffsetButton.jsx";
import TeeButton from "../Components/ButtonsToRender/TeeButton.jsx";
import EndCapButton from "../Components/ButtonsToRender/EndCapButton.jsx";
import PlenumButton from "../Components/ButtonsToRender/PlenumButton.jsx";
import SilencerButton from "../Components/ButtonsToRender/SilencerButton.jsx";
import DamperButton from "../Components/ButtonsToRender/DamperButton.jsx";
import GrillButton from "../Components/ButtonsToRender/GrillButton.jsx";
import Button from "../Components/Button.jsx";
import "./App.css";
import "../Components/Button.css";
// import "./styles.css"

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
  let state10 = useSelector(showSilencer);
  let state11 = useSelector(showDamper);
  let state12 = useSelector(showGrill);
  console.log(`Current state1 is: ${state1}`);
  console.log(`Current state2 is: ${state2}`);
  console.log(`Current state3 is: ${state3}`);
  console.log(`Current state4 is: ${state4}`);
  console.log(`Current state5 is: ${state5}`);
  console.log(`Current state6 is: ${state6}`);
  console.log(`Current state7 is: ${state7}`);
  console.log(`Current state8 is: ${state8}`);
  console.log(`Current state9 is: ${state9}`);
  console.log(`Current state10 is: ${state10}`);
  console.log(`Current state11 is: ${state11}`);
  console.log(`Current state11 is: ${state12}`);

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

  const clickButtonSilencer = () => {
    dispatch(clickSilencer(!state10));
  };

  const clickButtonDamper = () => {
    dispatch(clickDamper(!state11));
  };

  const clickButtonGrill = () => {
    dispatch(clickGrill(!state12));
  };

  //==========
  //Render Buttons

  return (
    <div className="App">
      <div className="nav">
        <Button onClick={() => clickResetButton()} label="0. Reset"></Button>
        <Button onClick={() => clickButton15HS31()} label="1. 15HS31"></Button>
        <Button onClick={() => clickButton15HP31()} label="2. 15HP31"></Button>
        <Button onClick={() => clickButton15HR31()} label="3. 15HR31"></Button>
        <Button
          onClick={() => clickButton15HR31ABT()}
          label="4. 15HR31ABT"
        ></Button>
        <Button
          onClick={() => clickButton15HR31PLUS()}
          label="5. 15HR31PLUS"
        ></Button>
        <Button onClick={() => clickButton15HK31()} label="6. 15HK31"></Button>
        <Button onClick={() => clickButton15HB21()} label="7. 15HB21"></Button>
        <Button onClick={() => clickButton15HE21()} label="8. 15HE21"></Button>
        <Button
          onClick={() => clickButton15HN21ABT()}
          label="9. 15HN21ABT"
        ></Button>
        <Button
          onClick={() => clickButton15HN21PLUS()}
          label="10. 15HN21PLUS"
        ></Button>
      </div>

      <div className="sidebar">
        <p>{`Current material type is: ${state1}`}</p>
        <p>{`Duct state is: ${state2}`}</p>
        <p>{`Elbow90 state is: ${state3}`}</p>
        <p>{`Elbow90 state is: ${state4}`}</p>
        <p>{`Reducer state is: ${state5}`}</p>
        <p>{`Offset state is: ${state6}`}</p>
        <p>{`Tee state is: ${state7}`}</p>
        <p>{`EndCap state is: ${state8}`}</p>
        <p>{`Plenum state is: ${state9}`}</p>
        <p>{`Silencer state is: ${state10}`}</p>
        <p>{`Damper state is: ${state11}`}</p>
        <p>{`Grill state is: ${state12}`}</p>
      </div>
      <div className="main">
        <div>
          {<DuctButton state2={state2} onClick={() => clickButtonDuct()} />}
        </div>
        <div>
          {
            <Elbow90Button
              state3={state3}
              onClick={() => clickButtonElbow90()}
            />
          }
        </div>
        <div>
          {
            <Elbow45Button
              state4={state4}
              onClick={() => clickButtonElbow45()}
            />
          }
        </div>
        <div>
          {
            <ReducerButton
              state5={state5}
              onClick={() => clickButtonReducer()}
            />
          }
        </div>
        <div>
          {<OffsetButton state6={state6} onClick={() => clickButtonOffset()} />}
        </div>
        <div>
          {<TeeButton state7={state7} onClick={() => clickButtonTee()} />}
        </div>
        <div>
          {<EndCapButton state8={state8} onClick={() => clickButtonEndCap()} />}
        </div>
        <div>
          {<PlenumButton state9={state9} onClick={() => clickButtonPlenum()} />}
        </div>
        <div>
          {
            <SilencerButton
              state10={state10}
              onClick={() => clickButtonSilencer()}
            />
          }
        </div>
        <div>
          {
            <DamperButton
              state11={state11}
              onClick={() => clickButtonDamper()}
            />
          }
        </div>
        <div>
          {<GrillButton state12={state12} onClick={() => clickButtonGrill()} />}
        </div>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
