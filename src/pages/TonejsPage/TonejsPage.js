import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Tone from "tone";

import Pianonotescomponent from "../../components/TonejsComponents/Piano notes/Pianonotescomponent";

// import { TriggerbuttonsComponent } from "../../components/TriggerButton/Triggerbuttoncomponent";

export default function TonejsPage() {
  const kickDrum = new Tone.MembraneSynth({
    volume: 4,
  }).toDestination();

  let wave;
  wave = new Tone.Waveform(128);
  kickDrum.connect(wave);
  let buffer = wave.getValue();

  const tonalal = new Tone.Analyser("waveform", 128);
  console.log("tonalal", tonalal);
  console.log("buffer", buffer);

  window.addEventListener(
    "keydown",
    function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
      switch (event.key) {
        case "a":
          kickDrum.triggerAttackRelease("C1", "8n");

          console.log(buffer[67]);
          break;
        case "s":
          kickDrum.triggerAttackRelease("C2", "32n");
          console.log(buffer[34]);
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
      event.preventDefault();
    },
    true
  );

  return (
    <div>
      <button
        onClick={() => {
          kickDrum.triggerAttackRelease("C1", "8n");
        }}
      >
        BOENK
      </button>
      <button
        onClick={() => {
          kickDrum.triggerAttackRelease("C2", "32n");
        }}
      >
        KLENK
      </button>
      <Pianonotescomponent a="" b="" />
    </div>
  );
}
