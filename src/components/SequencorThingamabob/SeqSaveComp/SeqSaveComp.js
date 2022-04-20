import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../../HeroBanner";

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
  const pattern = useSelector(selectSeqPattern);

  useEffect(() => {
    dispatch(Patterncolorsetter(color));
  }, [color]);

  useEffect(() => {
    dispatch(Patternnamesetter(name));
  }, [name]);

  // useEffect(() => {
  //   pattern.map((tel) => {
  //     tel.Atrig === true ? console.log(tel.id, "1") : console.log(tel.id, "0");
  //     tel.Btrig === true ? console.log(tel.id, "1") : console.log(tel.id, "0");
  //   });
  // }, [pattern]);

  const saveFunction = () => {
    // console.log("name:", patternMeta.name, "color", patternMeta.color, pattern);
    dispatch(PatternSaver(patternMeta.name, patternMeta.color, pattern));
  };

  return (
    <div className="seqsavecomp">
      <h2>SAVOR</h2>

      <select onChange={(e) => setColor(e.target.value)}>
        <option value="Color">Color</option>
        <option value="Blue">Blue</option>
        <option value="Red">Red</option>
        <option value="Purple">Purple</option>
        <option value="AliceBlue">AliceBlue</option>
        <option value="Aqua">Aqua</option>
        <option value="BurlyWood">BurlyWood</option>
        <option value="CadetBlue">CadetBlue</option>
        <option value="Brown">Brown wit</option>
      </select>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Name: {patternMeta.name}</p>
      <p>Color: {patternMeta.color}</p>
      <button
        onClick={() => {
          saveFunction();
        }}
      >
        SAVE
      </button>
    </div>
  );
}
