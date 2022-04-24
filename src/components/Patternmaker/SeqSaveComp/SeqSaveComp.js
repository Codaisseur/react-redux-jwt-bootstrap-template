import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSeqPattern } from "../../../store/seqState/selectors";

import {
  Patterncolorsetter,
  Patternnamesetter,
  PatternSaver,
} from "../../../store/seqState/actions";

export default function SeqSaveComp() {
  const [color, setColor] = useState("orange");
  const [name, setName] = useState("RITME");
  const dispatch = useDispatch();

  const seqPattern = useSelector(selectSeqPattern);
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
        <option value="#2D00F7">Blue</option>
        <option value="Navy">Navy Blue</option>
        <option value="Crimson Purple">Purple Flower</option>
        <option value="#FF0000">Red</option>
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
          dispatch(
            PatternSaver(seqPattern.name, seqPattern.color, seqPattern.pattern)
          );
        }}
      >
        SAVE
      </button>
    </div>
  );
}