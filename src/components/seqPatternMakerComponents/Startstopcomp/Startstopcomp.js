import { useState, useCallback, useEffect } from "react";
import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";

import { Transportstate } from "../../../store/seqState/selectors";
import { Transportupdater } from "../../../store/seqState/actions";

export default function Startstopcomp() {
  const [playState, setPlayState] = useState(Tone.Transport.state);

  const dispatch = useDispatch();

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
    <div className="startstop-style">
      <button
        onClick={() => {
          toggle();
        }}
      >
        Play Stop
      </button>
    </div>
  );
}
