import { useState, useCallback, useEffect } from "react";
import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";

import { Transportstate } from "../../../store/seqState/selectors";
import { Transportupdater } from "../../../store/seqState/actions";

export default function Recordercomponent() {
  const [playState, setPlayState] = useState(Tone.Transport.state);
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

  return (
    <div className="startstop-style">
      <button
        onClick={() => {
          recorder.start();
        }}
      >
        Record Start/
      </button>

      <button
        onClick={() => {
          Uitzetten();
        }}
      >
        Record /Stop
      </button>
    </div>
  );
}
