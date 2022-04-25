import { useState, useCallback, useEffect } from "react";
import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";

import { Transportstate } from "../../../store/seqState/selectors";

const recorderer = new Tone.Recorder();
Tone.Destination.connect(recorderer);

export default function RecorderComp() {
  const dispatch = useDispatch();
  let TpState = useSelector(Transportstate);

  const [recordingStatus, setRecordingStatus] = useState(false);

  let recording = recorderer;

  function Aanzetter() {
    recording = recorderer.start();
    console.log(recorderer.state);
  }

  async function Uitzetter() {
    // the recorded audio is returned as a blob
    recording = await recorderer.stop();
    // download the recording by creating an anchor element and blob url
    const url = URL.createObjectURL(recording);
    const anchor = document.createElement("a");
    anchor.download = "recording.webm";
    anchor.href = url;
    anchor.click();
  }

  return (
    <div className="Recorder-style">
      <h3 style={recordingStatus === true ? { color: "red" } : { color: "" }}>
        Recorder
      </h3>

      {recordingStatus === false && TpState === "started" ? (
        <button
          onClick={() => {
            Aanzetter();
            setRecordingStatus(true);
          }}
        >
          Start REC
        </button>
      ) : (
        <button
          style={recordingStatus === true ? { color: "" } : { display: "none" }}
          onClick={() => {
            Uitzetter();
            setRecordingStatus(false);
          }}
        >
          Stop REC
        </button>
      )}
    </div>
  );
}
