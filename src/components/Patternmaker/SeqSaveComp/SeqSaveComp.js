import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSeqPatternMeta,
  selectSeqPattern,
} from "../../../store/seqState/selectors";

import {
  Patterncolorsetter,
  Patternnamesetter,
  PatternSaver,
} from "../../../store/seqState/actions";

export default function SeqSaveComp() {
  const [color, setColor] = useState("Blue");
  const [name, setName] = useState("RITME1");
  const dispatch = useDispatch();

  const patternMeta = useSelector(selectSeqPatternMeta);
  const pattern = useSelector(selectSeqPattern); // KRIJG TIE NORMAAL UIT DE STORE

  useEffect(() => {
    dispatch(Patterncolorsetter(color));
  }, [color]);

  useEffect(() => {
    dispatch(Patternnamesetter(name));
  }, [name]);

  return (
    <div className="Save-style">
      <h3>save pattern</h3>

      <select onChange={(e) => setColor(e.target.value)}>
        <option value="Blue">Blue</option>
        <option value="Red">Red</option>
        <option value="Purple">Purple</option>
        <option value="DeepPink">Deep Pink</option>
        <option value="GreenYellow">Green Yellow</option>
        <option value="BurlyWood">BurlyWood</option>
        <option value="PaleVioletRed">Pale Violet Red</option>
        <option value="Tomato">Tomato</option>
      </select>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={() => {
          dispatch(PatternSaver(patternMeta.name, patternMeta.color, pattern));
        }}
      >
        SAVE
      </button>
    </div>
  );
}
