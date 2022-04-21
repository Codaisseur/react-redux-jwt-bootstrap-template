import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../../HeroBanner";

import { SeqSoundSetter } from "../../../store/seqState/actions";
import { selectSeqSound } from "../../../store/seqState/selectors";

export default function SelSoundComp() {
  const [soundStyle, setSoundStyle] = useState("loud");
  const dispatch = useDispatch();
  const soundSelected = useSelector(selectSeqSound);

  dispatch(SeqSoundSetter(soundStyle));

  return (
    <div className="sound-selector-style">
      <h3>Sound Selector</h3>
      <select onChange={(e) => setSoundStyle(e.target.value)}>
        <option value="Sound selector">Sound Selector</option>
        <option value="Loud">Loud</option>
        <option value="Soft">Soft</option>
        <option value="Metal">Metal</option>
        <option value="Wood">Wood</option>
      </select>
      <h4>Stijl : {soundSelected} </h4>
    </div>
  );
}
