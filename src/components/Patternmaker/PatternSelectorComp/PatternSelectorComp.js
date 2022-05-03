import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { SavedPatterns } from "../../../store/seqState/selectors";

import { PatternUpdatewithSelect } from "../../../store/seqState/actions";

export default function PatternSelectorComp() {
  const dispatch = useDispatch();

  const savedsongs = useSelector(SavedPatterns);

  // const filtered = savedsongs.find((song) => song.name === seqselected);
  // if (filtered === undefined) {
  //   console.log("ik ben nog undfeind");
  // } else {
  //   console.log("DEZE WIL IK NAAR DE MACHINE STUREN", filtered.pattern);
  //   // dispatch(PatternUpdatewithSelect(filtered.pattern));
  // }

  return (
    <div className="Selector-style">
      <h3>Pattern selector</h3>

      {savedsongs.map((pattern, i) => (
        <button
          key={i}
          style={{
            border: `1px solid ${pattern.color}`,
            color: `${pattern.color}`,
          }}
          onClick={() => {
            dispatch(PatternUpdatewithSelect(pattern)); // was eerst pattern pattern
          }}
        >
          {pattern.name}
        </button>
      ))}
    </div>
  );
}
