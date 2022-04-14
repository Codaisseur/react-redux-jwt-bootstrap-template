import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Tone from "tone";

import { Link } from "react-router-dom";

export default function Pianonotescomponent() {
  const dispatch = useDispatch();

  const [freqshiftFreq, setfreqshiftFreq] = useState(888);
  const [freqshiftDW, setfreqshiftDW] = useState("");
  const [filterFreq, setFilterReq] = useState(200);

  // const shift = new Tone.FrequencyShifter(freqshiftFreq).toDestination();
  // const reverb = new Tone.Reverb().connect(shift);
  // const filter = new Tone.Filter(filterFreq, "lowpass").connect(shift);
  const synth = new Tone.Synth({
    oscillator: {
      type: "sine",
    },
  }).toDestination();

  const schietort = (a, b) => {
    synth.triggerAttackRelease(a, b);
  };

  window.addEventListener(
    "keydown",
    function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      switch (event.key) {
        case "1":
          schietort("C4", "32n");
          break;
        case "2":
          schietort("D4", "32n");
          break;
        case "3":
          schietort("E4", "32n");
          break;
        case "4":
          schietort("F4", "32n");
          break;
        case "5":
          schietort("G4", "32n");
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    },
    true
  );
  // the last option dispatches the event to the listener first,
  // then dispatches event to window

  return (
    <div className="tone-style">
      <div>
        <button
          className="note"
          onClick={() => {
            schietort("C4", "8n");
          }}
        >
          C
        </button>

        <button
          className="note"
          onClick={() => {
            schietort("D4", "8n");
          }}
        >
          D
        </button>

        <button
          className="note"
          onClick={() => {
            schietort("E4", "8n");
          }}
        >
          E
        </button>

        <button
          className="note"
          onClick={() => {
            schietort("F4", "8n");
          }}
        >
          F
        </button>

        <button
          className="note"
          onClick={() => {
            schietort("G4", "8n");
          }}
        >
          G
        </button>
      </div>

      {/* <div class="sliders">
        <input
          onChange={(e) => {
            setfreqshiftFreq(e.target.value);
          }}
          type="range"
          value={freqshiftFreq}
          min="400"
          max="800"
        />
        Freq Shifter Freq: {freqshiftFreq}
        <input
          onChange={(e) => {
            setFilterReq(e.target.value);
          }}
          type="range"
          value={filterFreq}
          min="40"
          max="10000"
        />
        Filter Freq: {filterFreq}
      </div> */}
    </div>
  );
}
