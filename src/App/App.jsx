import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImGithub } from "@react-icons/all-files/im/ImGithub";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiWebpack } from "@react-icons/all-files/si/SiWebpack";
import { IoLogoVercel } from "@react-icons/all-files/io5/IoLogoVercel";
import { IoLogoPwa } from "@react-icons/all-files/io5/IoLogoPwa";
import { HiOutlineCursorClick } from "@react-icons/all-files/hi/HiOutlineCursorClick";
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
} from "../Reducer/buttonSlice.ts";
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
import "./App.scss";
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

  const clickButton15HL21 = () => {
    dispatch(changeMaterialType("15HL21"));
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
      <div className="header">
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
        <Button onClick={() => clickButton15HL21()} label="9. 15HL21"></Button>
        <Button
          onClick={() => clickButton15HN21ABT()}
          label="10. 15HN21ABT"
        ></Button>
        <Button
          onClick={() => clickButton15HN21PLUS()}
          label="11. 15HN21PLUS"
        ></Button>
      </div>

      <div className="sidebar">
        <p>{`Current material type is: ${state1}`}</p>
        <p>{`Duct is: ${state2 ? "ON" : "OFF"}`}</p>
        <p>{`Elbow90 is: ${state3 ? "ON" : "OFF"}`}</p>
        <p>{`Elbow90 is: ${state4 ? "ON" : "OFF"}`}</p>
        <p>{`Reducer is: ${state5 ? "ON" : "OFF"}`}</p>
        <p>{`Offset is: ${state6 ? "ON" : "OFF"}`}</p>
        <p>{`Tee is: ${state7 ? "ON" : "OFF"}`}</p>
        <p>{`EndCap is: ${state8 ? "ON" : "OFF"}`}</p>
        <p>{`Plenum is: ${state9 ? "ON" : "OFF"}`}</p>
        <p>{`Silencer is: ${state10 ? "ON" : "OFF"}`}</p>
        <p>{`Damper is: ${state11 ? "ON" : "OFF"}`}</p>
        <p>{`Grill is: ${state12 ? "ON" : "OFF"}`}</p>
        <p>{"Price version update date: 31.08.21"}</p>
        <p>{"Previous price version update date: 31.07.21"}</p>
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
        <p>Copyright Ⓒ 2021. Mihails Fjodorovs. All rights reserved.</p>
        <a href="https://reactjs.org/" title="ReactJS">
          <FaReact className="App-logo-react" />
        </a>
        <a href="https://redux.js.org/" title="ReduxJS">
          <SiRedux className="App-logo-redux" />
        </a>
        <a href="https://tailwindcss.com/" title="Tailwind">
          <SiTailwindcss className="App-logo-tailwind" />
        </a>
        <a href="https://github.com/" title="GitHub">
          <ImGithub className="App-logo" />
        </a>
        <a href="https://webpack.js.org/" title="Webpack">
          <SiWebpack className="App-logo-webpack" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/"
          title="PWA"
        >
          <IoLogoPwa className="App-logo-pwa" />
        </a>
        <a href="https://github.com/eXebyss" className="footer-github">
          Author GitHub Repo is here!
          <HiOutlineCursorClick className="icon-click" />
        </a>
        <a href="https://vercel.com/" className="footer-vercel" title="Vercel">
          Deployed on: Vercel
          <IoLogoVercel className="icon-vercel" />
        </a>
      </div>
    </div>
  );
}

export default App;
