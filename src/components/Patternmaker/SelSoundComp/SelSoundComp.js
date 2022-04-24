import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SeqSoundSetter } from "../../../store/seqState/actions";
import { seqSettings } from "../../../store/seqState/selectors";

export default function SelSoundComp() {
  const [soundStyle, setSoundStyle] = useState("loud");
  const dispatch = useDispatch();

  const seqSetting = useSelector(seqSettings);

  useEffect(() => {
    dispatch(SeqSoundSetter(soundStyle));
  }, [soundStyle]);

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
