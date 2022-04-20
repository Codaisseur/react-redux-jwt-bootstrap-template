import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSeqPattern } from "../../../store/seqState/selectors";
import {
  TriggerAanUitAtrig,
  TriggerAanUitBtrig,
} from "../../../store/seqState/actions";

export default function SeqComp() {
  const dispatch = useDispatch();
  const seqPattern = useSelector(selectSeqPattern);

  return (
    <div className="sequencer-style">
      <h2>SEQUENSOR THINGAMABOB</h2>

      {seqPattern.map((i) => (
        <tr key={i.id}>
          <button
            onClick={() => {
              dispatch(TriggerAanUitAtrig(i.id));
            }}
          >
            tel Atrig {i.id}
          </button>

          <button
            onClick={() => {
              dispatch(TriggerAanUitBtrig(i.id, i.Btrig));
            }}
          >
            tel Btrig {i.id}
          </button>
          <th>Atrigger is{i.Atrig === true ? <p>true</p> : <p>false</p>}</th>

          <th>Btrigger is{i.Btrig === true ? <p>true</p> : <p>false</p>}</th>
        </tr>
      ))}
    </div>
  );
}
