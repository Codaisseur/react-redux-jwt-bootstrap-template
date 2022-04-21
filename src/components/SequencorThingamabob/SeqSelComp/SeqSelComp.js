import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../../HeroBanner";

import { seqSongPattern } from "../../../store/seqState/selectors";

// import {} from "../../../store/seqState/actions";

export default function SeqSelComp() {
  const [seqselected, setSeq] = useState("");
  const [inSong, setInSong] = useState([]);
  const seqsong = useSelector(seqSongPattern);

  seqsong.map((pattern) => {
    console.log(pattern.name);
  });

  return (
    <div className="seq-selector-style">
      <h2>SEQ Selector</h2>

      <button>+-</button>
      <select onChange={(e) => setSeq(e.target.value)}>
        {seqsong.map((pattern) => (
          <option value={pattern.name}>{pattern.name}</option>
        ))}
      </select>
    </div>
  );
}
