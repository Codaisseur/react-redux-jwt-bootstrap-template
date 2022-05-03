import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { SeqSoundSetter } from "../../../store/seqState/actions";

export default function SelectSoundComp() {
  const [soundStyle, setSoundStyle] = useState("loud");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SeqSoundSetter(soundStyle));
  }, [dispatch, soundStyle]);

  return (
    <div className="Sound-style">
      <h3>Sound Selector</h3>
      <select onChange={(e) => setSoundStyle(e.target.value)}>
        <option value="Loud">Loud</option>
        <option value="Electronic">Electronic</option>
        <option value="Percussion">Percussion</option>
        <option value="Neo-Soul">Neo-Soul</option>
      </select>
    </div>
  );
}
