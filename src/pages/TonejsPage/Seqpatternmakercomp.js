import React, { useCallback, useState, useEffect } from "react";
import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSeqPattern,
  selectSeqPatternMeta,
  selectSeqSound,
} from "../../store/seqState/selectors";
import {
  TriggerAanUitAtrig,
  TriggerAanUitBtrig,
} from "../../store/seqState/actions";

// let notes3 = ;
// let notes2 = ["C3", "D3"];
// let notes1 = ["F3", "E3"];
let notes = ["A1", "B1"];

let initialPattern = [
  [0, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 1, 1, 0, 0, 0],
];

const sampler = new Tone.Sampler({
  urls: {
    A1: "/Loud/bdfilm.wav",
    B1: "/Loud/jaydeesnare.wav",
    C1: "/Metal/cowbell.wav",
    D1: "/Metal/hih.wav",
    E1: "/Soft/conga.wav",
    F1: "/Soft/snap.wav",
    G1: "/Wood/kick.wav",
    A2: "/Wood/clap.wav",
  },
  baseUrl: "http://127.0.0.1:5500/src/data/Drumsounds",
}).toDestination();

export default function Sequencerinternet(props) {
  const [playState, setPlayState] = useState(Tone.Transport.state);
  const [activeColumn, setColumn] = useState(0);
  const [pattern, updatePattern] = useState(initialPattern);

  const seqPattern = useSelector(selectSeqPattern);
  const seqPatternMeta = useSelector(selectSeqPatternMeta);
  const soundselected = useSelector(selectSeqSound);

  switch (soundselected) {
    case "Loud":
      notes = ["B1", "A1"];
      break;
    case "Soft":
      notes = ["D1", "C1"];
      break;
    case "Metal":
      notes = ["F1", "E1"];
      break;
    case "Wood":
      notes = ["A2", "G1"];
      break;
    default:
      notes = ["A2", "G1"];
  }

  useEffect(() => {
    const loop = new Tone.Sequence(
      (time, col) => {
        // Update active column for animation
        setColumn(col);

        // Loop current pattern
        pattern.map((row, noteIndex) => {
          // If active
          if (row[col]) {
            // Play based on which row
            sampler.triggerAttackRelease(notes[noteIndex], "16n", time);
          }
        });
      },
      [0, 1, 2, 3, 4, 5, 6, 7],
      "8n"
    ).start(0);
    return () => loop.dispose();
  }, [pattern]);

  // Toggle playing / stopped
  const toggle = useCallback(() => {
    Tone.Transport.toggle();
    setPlayState(Tone.Transport.state);
  }, []);

  // Update pattern by making a copy and inverting the value
  function setPattern({ x, y, value }) {
    const patternCopy = [...pattern];
    patternCopy[y][x] = +!value;
    updatePattern(patternCopy);
  }

  return (
    <div>
      <h2>Pattern Maker</h2>
      <button
        onClick={() => {
          toggle();
        }}
      >
        PLAY/STOP
      </button>

      {/* {pattern.map((row, y) => (
        <div key={y} style={{ display: "flex", justifyContent: "center" }}>
          {row.map((value, x) => (
            <Square
              key={x}
              active={activeColumn === x}
              selected={value}
              onClick={() => setPattern({ x, y, value })}
            />
          ))}
        </div>
      ))}
      <div onClick={() => toggle()}>{playState}</div> */}

      <div>
        {pattern.map((row, y) => (
          <tr key={y}>
            {row.map((value, x) => (
              <button
                onClick={() => {
                  // console.log("dikzak", "row", row, "y", y);
                  setPattern({ x, y, value }); //
                }}
              >
                <div
                  style={
                    value === 1
                      ? { background: seqPatternMeta.color }
                      : { background: "white" }
                  }
                >
                  {value === 1 ? <p>X</p> : <p>O</p>}
                </div>
                AAN
              </button>
            ))}
          </tr>
        ))}
      </div>
    </div>
  );
}

const Square = ({ active, value, onClick }) => (
  <div onClick={onClick}>{value}</div>
);
