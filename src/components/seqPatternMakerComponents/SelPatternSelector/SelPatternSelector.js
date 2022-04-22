import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  SavedPatterns,
  selectSeqPattern,
} from "../../../store/seqState/selectors";

// import { PatternUpdaterselected } from "../../../store/seqState/actions";

export default function SelPatternSelector() {
  const dispatch = useDispatch();
  const [seqselected, setSeq] = useState("");

  const savedsongs = useSelector(SavedPatterns);
  const selectSeqPatternnn = useSelector(selectSeqPattern);

  console.log("savedsongs", savedsongs); // wordt dus op elke change geupdate :S

  const filtered = savedsongs.find((song) => song.name === seqselected);
  if (filtered === undefined) {
    // console.log("ik ben nog undfeind");
  } else {
    // console.log("filtered", filtered.pattern[0]);
    console.log("selectSeqPatternnn", selectSeqPatternnn);
    // dispatch(PatternUpdaterselected(selectSeqPatternnn));
    // dispatch(Extrapatternsavor(filtered.pattern));
  }

  return (
    <div className="seq-selector-style">
      <h3>Pattern selector</h3>

      {savedsongs.map((pattern) => (
        <div style={{ background: pattern.color }}>
          <button>-</button>
          {pattern.name}
          {pattern.pattern[0]}
          {pattern.pattern[1]}
        </div>
      ))}

      {/* <select onChange={(e) => setSeq(e.target.value)}>
        {savedsongs.map((pattern) => (
          <option value={pattern.name}>{pattern.name}</option>
        ))}
      </select> */}
    </div>
  );
}
