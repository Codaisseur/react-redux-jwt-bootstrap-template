import { useState } from "react";

import { useDispatch } from "react-redux";

import {
  seqSettingsVolaction,
  seqSettingsDelayaction,
} from "../../../store/seqState/actions";

export default function Volumeslidercomp() {
  const dispatch = useDispatch();
  const [volume, setVolume] = useState(0);
  const [delaydrywet, setDelaydrywet] = useState(0);

  dispatch(seqSettingsVolaction(volume));
  dispatch(seqSettingsDelayaction(delaydrywet));

  return (
    <div>
      <div className="volume-slider">
        <div class="slidecontainer">
          <input
            type="range"
            min="-40"
            max="0"
            value={volume}
            onChange={(e) => {
              setVolume(e.target.value);
            }}
            step="1"
          />
          vol:{volume}
        </div>
      </div>

      <div className="volume-slider">
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
          echo:{delaydrywet}
        </div>
      </div>
    </div>
  );
}
