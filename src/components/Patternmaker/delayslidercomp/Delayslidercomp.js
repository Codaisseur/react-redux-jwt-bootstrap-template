import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  seqSettingsDelayaction,
  seqSettingsDelayfeedbackaction,
} from "../../../store/seqState/actions";

export default function Delayslidercomp() {
  const dispatch = useDispatch();
  const [delaydrywet, setDelaydrywet] = useState(0);
  dispatch(seqSettingsDelayaction(delaydrywet));

  const [delayfeedback, setDelayfeedback] = useState(0.4);
  dispatch(seqSettingsDelayfeedbackaction(delayfeedback));

  return (
    <div className="delay-slider">
      <div>
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
    </div>
  );
}
