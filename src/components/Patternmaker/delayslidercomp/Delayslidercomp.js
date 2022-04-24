import { useState } from "react";
import { useDispatch } from "react-redux";

import { seqSettingsDelayaction } from "../../../store/seqState/actions";

export default function Delayslidercomp() {
  const dispatch = useDispatch();
  const [delaydrywet, setDelaydrywet] = useState(0);
  dispatch(seqSettingsDelayaction(delaydrywet));

  return (
    <div id="delayDIV" className="delay-slider">
      delay <br></br>
      {delaydrywet}
      <div class="slidecontainer">
        <input
          type="range"
          min="0"
          max="0.5"
          value={delaydrywet}
          onChange={(e) => {
            setDelaydrywet(e.target.value);
          }}
          step="0.05"
        />
      </div>
    </div>
  );
}