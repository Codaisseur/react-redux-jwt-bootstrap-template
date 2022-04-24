import React, { useCallback, useState, useEffect } from "react";
import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSeqPattern,
  selectSeqSound,
  seqSettingsVol,
  seqSettingsDel,
  seqSettingsFilter,
  seqSettingsDelfeedback,
  seqSettings,
} from "../../../store/seqState/selectors";

import { PatternUpdater } from "../../../store/seqState/actions";

let notes = ["A1", "B1"];

// let initialPattern = [
//   [0, 0, 1, 0, 0, 0, 1, 0],
//   [1, 0, 0, 1, 1, 0, 0, 0],
// ];

const vol = new Tone.Volume(0).toDestination();
const lpfilter = new Tone.Filter().connect(vol);
const feedbackDelay = new Tone.FeedbackDelay("12n", 0).connect(lpfilter);

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
}).connect(feedbackDelay);

export default function Sequencerinternet(props) {
  const dispatch = useDispatch();

  const [activeColumn, setColumn] = useState(0);

  const seqPattern = useSelector(selectSeqPattern);

  const seqVol = useSelector(seqSettingsVol);

  const soundselected = useSelector(selectSeqSound);

  const seqSetting = useSelector(seqSettings);

  const seqDelwet = useSelector(seqSettingsDel);

  const seqDelfeedback = useSelector(seqSettingsDelfeedback);

  const [pattern, updatePattern] = useState(seqPattern.pattern); //INIT BY REDUX STATE

  // PATTERN UPDATER FROM SELECT
  useEffect(() => {
    updatePattern(seqPattern.pattern);
  }, [seqPattern.pattern]);

  useEffect(() => {
    const loop = new Tone.Sequence(
      (time, col) => {
        setColumn(col);

        pattern.map((row, noteIndex) => {
          if (row[col]) {
            samples.triggerAttackRelease(notes[noteIndex], "16n", time);
          }
        });
      },
      [0, 1, 2, 3, 4, 5, 6, 7],
      "8n"
    ).start(0);
    return () => loop.dispose();
  }, [pattern]);

  // Update pattern by making a copy and inverting the value :S
  function setPattern({ x, y, value }) {
    const patternCopy = [...pattern];
    patternCopy[y][x] = +!value;
    updatePattern(patternCopy);
  }

  switch (seqSetting.seqSoundSelected) {
    case "Loud":
      notes = ["B1", "A1"];
      break;
    case "Electronic":
      notes = ["D1", "C1"];
      break;
    case "Percussion":
      notes = ["F1", "E1"];
      break;
    case "Neo-Soul":
      notes = ["A2", "G1"];
      break;
    default:
      notes = ["A2", "G1"];
  }

  // EFFECTS
  useEffect(() => {
    vol.volume.value = seqSetting.seqSettingsvol;
  }, [seqSetting.seqSettingsvol]);

  useEffect(() => {
    feedbackDelay.wet.value = seqSetting.seqSettingsdel;
    feedbackDelay.feedback.value = seqSetting.seqSettingsdel;
  }, [seqSetting.seqSettingsdel]);

  return (
    <div className="Pattern-style">
      {/* <p>{(activeColumn + 1) / 2 + 0.5} </p> */}

      <div
        className="pattern-seqrows"
        style={{
          border: `1px solid ${seqPattern.color}`,
          background: "rgba(1,1,1,0.7)",
        }}
      >
        {seqPattern.pattern.map((row, y) => (
          <tr key={y}>
            {row.map((value, x) => (
              <button
                style={
                  value === 1
                    ? {
                        background: `linear-gradient(to left, rgba(0,0,0,1), ${seqPattern.color})`,
                        border: seqPattern.color,
                      }
                    : {
                        background: "rgba(0,0,0,0.4)",
                        border: seqPattern.color,
                      }
                }
                onClick={() => {
                  setPattern({ x, y, value });
                  dispatch(PatternUpdater(pattern));
                }}
              ></button>
            ))}
          </tr>
        ))}
      </div>
    </div>
  );
}
