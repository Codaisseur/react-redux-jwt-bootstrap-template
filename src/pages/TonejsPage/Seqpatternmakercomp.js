import React, { useCallback, useState, useEffect } from "react";
import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSeqPattern,
  selectSeqPatternMeta,
  selectSeqSound,
  seqSongPattern,
} from "../../store/seqState/selectors";

import { Extrapatternsavor } from "../../store/seqState/actions";

let notes = ["A1", "B1"];
let initialPattern = [
  [0, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 1, 1, 0, 0, 0],
];

const samples = new Tone.Sampler({
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
  const dispatch = useDispatch();
  const [playState, setPlayState] = useState(Tone.Transport.state);
  const [activeColumn, setColumn] = useState(0);

  const seqPattern = useSelector(selectSeqPattern);
  const seqPatternMeta = useSelector(selectSeqPatternMeta);
  const soundselected = useSelector(selectSeqSound);
  const songPat = useSelector(seqSongPattern);

  // console.log("songPat", songPat);

  const [pattern, updatePattern] = useState(seqPattern); // comes from redux store now initialPattern

  // useEffect(() => {
  //   console.log("songPat:", songPat);
  // }, [songPat]);

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
            samples.triggerAttackRelease(notes[noteIndex], "16n", time);
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
    Tone.start();
    Tone.Transport.toggle();
    setPlayState(Tone.Transport.state);
  }, []);

  //console.log(Tone.Transport.state);

  // Update pattern by making a copy and inverting the value
  function setPattern({ x, y, value }) {
    const patternCopy = [...pattern];
    patternCopy[y][x] = +!value;
    updatePattern(patternCopy);
  }

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

  return (
    <div className="pattern-component-style">
      <h2>Pattern Maker</h2>
      <p>{(activeColumn + 1) / 2 + 0.5} </p>

      <button
        onClick={() => {
          toggle();
        }}
      >
        >||
      </button>

      <div className="pattern-seqrows">
        {pattern.map((row, y) => (
          <tr key={y}>
            {row.map((value, x) => (
              <button
                onClick={() => {
                  dispatch(Extrapatternsavor(pattern));
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
              </button>
            ))}
          </tr>
        ))}
      </div>
    </div>
  );
}

// style={{
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: 25,
//   height: 25,
//   background: value ? "#999" : "",
//   border: active ? "1px solid #999" : "1px solid #eee"
// }}
