import { useState, useCallback, useEffect } from "react";
import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";

import { Transportstate } from "../../../store/seqState/selectors";

export default function Recordercomponent() {
  const dispatch = useDispatch();
  let TpState = useSelector(Transportstate);

  const [recordKnop, setRecordKnop] = useState(false);
  const [recordState, setRecordState] = useState(false);

  const recorder = new Tone.Recorder();
  Tone.Destination.connect(recorder);

  let recording;

  // console.log("recorder", recorder);

  // function Aanzetten() {
  //   recording = true;
  // }
  // function Zetuit() {
  //   recording = false;
  // }
  // useEffect(() => {
  //   recorder.start();
  // }, recording);

  // useEffect(() => {
  //   Uitzetter();
  // }, recorder.state);

  async function Uitzetter() {
    // the recorded audio is returned as a blob
    const recording = await recorder.stop();
    // download the recording by creating an anchor element and blob url
    const url = URL.createObjectURL(recording);
    const anchor = document.createElement("a");
    anchor.download = "recording.webm";
    anchor.href = url;
    anchor.click();
  }

  // if (recordKnop === true && TpState === "started" && recordState === false) {
  //   Aanzetten();
  //   console.log(recorder.state);
  //   console.log("START RECORDING!!!");
  //   setRecordState(true);
  // }
  // if (
  //   (recordKnop === false && recordState === true) ||
  //   (recordState === true && TpState === "stopped")
  // ) {
  //   setRecordState(false);
  //   console.log("STOP RECORDING");
  //   Uitzetter();
  // }

  // console.log("recordKnop", recordKnop);

  return (
    <div className="Recorder-style">
      <h3>Recorder</h3>

      
      <div>{TpState === "started" ? <p>[ PLAY ]</p> : <p>[ STOP ]</p>}</div>
      {/* <button
        onClick={() => {
          Aanzetten();

          console.log(recorder.state);
        }}
      >
        recorder start
      </button>
      <button
        onClick={() => {
          Uitzetter();
          console.log(recorder.state);
        }}
      >
        recorder stop
      </button> */}
      <button
        onClick={() => {
          setRecordKnop(!recordKnop);
        }}
      >
        <div
          style={
            recordKnop === true
              ? { background: "red" }
              : { background: "white" }
          }
        >
          {recordKnop === true ? <p>I</p> : <p>O</p>}
        </div>
      </button>
    </div>
  );
}
