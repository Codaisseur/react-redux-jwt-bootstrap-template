import React, { useEffect } from "react";
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

import HomePage from "./pages/HomePage/HomePage";

//SPEAKERS
import speaker from "./data/speaker.png";
import speakerlinks from "./data/speakerlinks.png";
import TBREEL from "./data/TBREEL.png";
import TBREELlinks from "./data/TBREELlinks.png";
import TBREELrechts from "./data/TBREELrechts.png";

import CanvasInit from "./pages/CanvasP5/CanvasInit";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const TpState = useSelector(Transportstate);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}

      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/canvasinit" element={<CanvasInit />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <img
        style={{ position: "absolute", bottom: "-2%", left: "-2%" }}
        src={speakerlinks}
        alt="speakerlinks"
        height="455"
      />
      <img
        style={{ position: "absolute", bottom: "-4%", right: "-1%" }}
        src={speaker}
        alt="speaker"
        height="460"
      />

      <div className="tbreel-style">
        <img style={{}} src={TBREEL} alt="TBREEL" height="345" />

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
      </div>
    </div>
  );
}

export default App;
