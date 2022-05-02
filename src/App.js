import React, { useEffect, useCallback, useState } from "react";
import * as Tone from "tone";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage/HomePage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";

import { getUserWithStoredToken } from "./store/user/actions";

import { Transportupdater } from "./store/seqState/actions";

//SPEAKERS
import speaker from "./data/speaker.png";
import speakerlinks from "./data/speakerlinks.png";
import TBREEL from "./data/TBREEL.png";
import TBREELlinks from "./data/TBREELlinks.png";
import TBREELrechts from "./data/TBREELrechts.png";

function App() {
  const [playState, setPlayState] = useState(Tone.Transport.state);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

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
  }, [dispatch, Tone.Transport.state]);

  function DelayToggleHide() {
    var x = document.getElementById("delayDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function FilterToggleHide() {
    var x = document.getElementById("filterDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div className="App">
      {/* <Navigation /> */}
      <MessageBox />
      {isLoading ? <Loading /> : null}

      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <button
        style={{ background: "rgba(201, 76, 76, 0.0", border: "none" }}
        type="button"
        onClick={() => {
          DelayToggleHide();
        }}
      >
        <img
          style={{ position: "absolute", bottom: "-2%", left: "-2%" }}
          src={speakerlinks}
          alt="speakerlinks"
          height="220"
        />
      </button>

      <button
        style={{ background: "rgba(201, 76, 76, 0.0", border: "none" }}
        type="button"
        onClick={() => {
          FilterToggleHide();
        }}
      >
        <img
          style={{ position: "absolute", bottom: "-4%", right: "-1%" }}
          src={speaker}
          alt="speaker"
          height="220"
        />
      </button>

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
              playState === "started"
                ? { animation: "spin 4s linear infinite" }
                : { animationplaystate: "paused" }
            }
            className="draaiding1"
          >
            <img src={TBREELrechts} alt="TBREELrechts" />
          </div>

          <div
            style={
              playState === "started"
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
