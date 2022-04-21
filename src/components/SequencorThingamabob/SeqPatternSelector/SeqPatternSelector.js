import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  seqSongPattern,
  selectSeqPattern,
} from "../../../store/seqState/selectors";

import { Extrapatternsavor } from "../../../store/seqState/actions";

export default function SeqPatternSelector() {
  const dispatch = useDispatch();
  const [seqselected, setSeq] = useState("");

  const seqsong = useSelector(seqSongPattern);
  const selectSeqPatternnn = useSelector(selectSeqPattern);

  const filtered = seqsong.find((song) => song.name === seqselected);
  if (filtered === undefined) {
    // console.log("ik ben nog undfeind");
  } else {
    // console.log("filtered", filtered.pattern[0]);
    console.log("selectSeqPatternnn", selectSeqPatternnn);
    // dispatch(Extrapatternsavor(filtered.pattern));
  }

  return (
    <div className="seq-selector-style">
      <h3>Pattern selector</h3>

      {seqsong.map((pattern) => (
        <div style={{ background: pattern.color }}>
          <button>-</button>
          {pattern.name}
          {pattern.pattern[0]}
          {pattern.pattern[1]}
        </div>
      ))}

      <select onChange={(e) => setSeq(e.target.value)}>
        {seqsong.map((pattern) => (
          <option value={pattern.name}>{pattern.name}</option>
        ))}
      </select>
    </div>
  );
}
