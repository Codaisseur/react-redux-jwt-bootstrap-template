import React, { useEffect, useCallback, useState } from "react";
import * as Tone from "tone";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { Transportstate } from "./store/seqState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Transportupdater } from "./store/seqState/actions";
import HomePage from "./pages/HomePage/HomePage";

//SPEAKERS
import speaker from "./data/speaker.png";
import speakerlinks from "./data/speakerlinks.png";
import TBREEL from "./data/TBREEL.png";
import TBREELlinks from "./data/TBREELlinks.png";
import TBREELrechts from "./data/TBREELrechts.png";

import CanvasInit from "./pages/CanvasP5/CanvasInit";
import Canvastry from "./pages/CanvasP5/Canvasp5try";

function App() {
  const [playState, setPlayState] = useState(Tone.Transport.state);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const TpState = useSelector(Transportstate);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  // Toggle playing / stopped
  const toggle = useCallback(() => {
    Tone.start();
    Tone.Transport.toggle();
    setPlayState(Tone.Transport.state);
  }, []);

  useEffect(() => {
    dispatch(Transportupdater(Tone.Transport.state));
  }, [Tone.Transport.state]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}

      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/canvastry" element={<Canvastry />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <img
        style={{ position: "absolute", bottom: "-2%", left: "-2%" }}
        src={speakerlinks}
        alt="speakerlinks"
        height="220"
      />
      <img
        style={{ position: "absolute", bottom: "-4%", right: "-1%" }}
        src={speaker}
        alt="speaker"
        height="220"
      />

      <div className="tbreel-style">
        <button
          style={{ background: "rgba(201, 76, 76, 0.0", border: "none" }}
          type="button"
          onClick={() => {
            toggle();
          }}
        >
          <img style={{}} src={TBREEL} alt="TBREEL" height="220" />

          <div
            style={
              TpState === "started"
                ? { animation: "spin 4s linear infinite" }
                : { animationplaystate: "paused" }
            }
            className="draaiding1"
          >
            <img src={TBREELrechts} alt="TBREELrechts" />
          </div>

          <div
            style={
              TpState === "started"
                ? { animation: "spin 4s linear infinite" }
                : { animation: "paused" }
            }
            className="draaiding2"
          >
            <img src={TBREELlinks} alt="TBREELlinks" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
