import { useState, useCallback, useEffect } from "react";
import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";

import { Transportstate } from "../../../store/seqState/selectors";

export default function Recordercomponent() {
  let TpState = useSelector(Transportstate);

  let recorDing = false;

  console.log("TpState", TpState);
  const [recordKnop, setRecordKnop] = useState(false);
  // const [uitknop, setUitknop] = useState(false);

  const dispatch = useDispatch();

  const recorder = new Tone.Recorder();
  Tone.Destination.connect(recorder);

  async function Uitzetten() {
    // the recorded audio is returned as a blob
    const recording = await recorder.stop();
    // download the recording by creating an anchor element and blob url
    const url = URL.createObjectURL(recording);
    const anchor = document.createElement("a");
    anchor.download = "recording.webm";
    anchor.href = url;
    anchor.click();
  }

  // IF we are currently playing && recordknop is true > start recording

  // after starting recording

  // IF we are recording &&

  // if (recordKnop === true && TpState === "started" && uitknop === true) {
  //   console.log("recordstop");
  //   setRecordKnop(false);
  //   setRecordKnop(false);
  //}

  const RecordToggle = () => {
    recorDing = !recorDing;
    console.log(recorDing);
    setRecordKnop(recorDing);
    console.log("recordKnop", recordKnop);
  };

  return (
    <div className="Recorder-style">
      <div>{TpState === "started" ? <p>[ PLAY ]</p> : <p>[ STOP ]</p>}</div>

      <button
        onClick={() => {
          RecordToggle();
        }}
      >
        <div
          style={
            recorDing === true ? { background: "red" } : { background: "white" }
          }
        >
          {recorDing === true ? <p>I</p> : <p>O</p>}
        </div>
      </button>
    </div>
  );
}
