import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSeqPattern } from "../../store/seqState/selectors";

export default function SeqComp() {
  const usedispatch = useDispatch();
  const seqPattern = useSelector(selectSeqPattern);

  return (
    <div className="sequencer-style">
      <h2>SEQUENSOR THINGAMABOB</h2>

      <table>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
        </tr>
        <tr>
          <th>
            <input
              type="checkbox"
              value="1"
              onChange={() => {
                console.log("hoi idioot");
              }}
            ></input>
          </th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
        </tr>
      </table>

    
    </div>
  );
}
