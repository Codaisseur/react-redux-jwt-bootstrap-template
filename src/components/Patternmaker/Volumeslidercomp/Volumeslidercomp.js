import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { seqSettingsVolaction } from "../../../store/seqState/actions";

export default function Volumeslidercomp() {
  const dispatch = useDispatch();
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    dispatch(seqSettingsVolaction(volume));
  }, [dispatch, volume]);

  return (
    <div>
      <div className="volume-slider">
        Volume <br></br>
        {volume}
        <div className="slidecontainer">
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
        </div>
      </div>
    </div>
  );
}
