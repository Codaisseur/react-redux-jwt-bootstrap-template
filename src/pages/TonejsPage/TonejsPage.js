import React, { useEffect, useState } from "react";

import * as Tone from "tone";
import HeroBanner from "../../components/HeroBanner";
import "./style.css";

import Pianonotescomponent from "../../components/TonejsComponents/Piano notes/Pianonotescomponent";

let ready = false;

export default function TonejsPage(props) {
  const mijnArray = ["C1", null, ["E1", "F1"], "D2", "E2", "F2"];
  const mijnArray2 = ["C1", ["D1", "E1"], "F1", null, "D2", "E2", "F2"];
  const mijnArray3 = ["C1", "C1", "C1", "C1", "C1", "C1", "C1", "C1"];

  // console.clear(); //////////////////
  const player = new Tone.Player(
    "http://127.0.0.1:5500/src/data/MT40_Drums/BD_MT40_Valve3.wav"
  ).toDestination();
  const kickDrum = new Tone.MembraneSynth({
    volume: 4,
  }).toDestination();

  const sampler = new Tone.Sampler({
    urls: {
      A1: "BD_MT40_Valve3.wav",
      C2: "Perc_MT40_DOA1.wav",
    },
    baseUrl: "http://127.0.0.1:5500/src/data/MT40_Drums/",
  }).toDestination();

  const sampler2 = new Tone.Sampler({
    urls: {
      A1: "HH_MT40_DOA1.wav",
      C2: "Perc_MT40_DOA4.wav",
    },
    baseUrl: "http://127.0.0.1:5500/src/data/MT40_Drums/",
  }).toDestination();

  const sampler3 = new Tone.Sampler({
    urls: {
      A1: "HH_MT40_DOA1.wav",
      C2: "Perc_MT40_DOA4.wav",
    },
    baseUrl: "http://127.0.0.1:5500/src/data/MT40_Drums/",
  }).toDestination();

  // const seq = new Tone.Sequence((time, note) => {
  //   sampler.triggerAttackRelease(note, 0.1, time);
  // }, mijnArray).start(0);
  // Tone.Transport.start();

  // const seq2 = new Tone.Sequence((time, note) => {
  //   sampler2.triggerAttackRelease(note, 0.1, time);
  // }, mijnArray2).start(0);
  // Tone.Transport.start();

  const seq3 = new Tone.Sequence((time, note) => {
    sampler3.triggerAttackRelease(note, 0.1, time);
  }, mijnArray3).start(0);
  Tone.Transport.start();

  window.addEventListener(
    "keydown",
    function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
      switch (event.key) {
        case "q":
          sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
          break;
        case "w":
          player.start();
          break;
        case "a":
          kickDrum.triggerAttackRelease("C1", "8n");
          break;
        case "s":
          kickDrum.triggerAttackRelease("C2", "32n");
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
      event.preventDefault();
    },
    true
  );

  return (
    <div className="toneJs-page">
      <HeroBanner>
        <h1>Tone.js Page</h1>
      </HeroBanner>
      <button
        onClick={() => {
          Tone.Transport.stop();
        }}
      >
        STOP
      </button>

      <button
        onClick={() => {
          Tone.Transport.start();
        }}
      >
        START
      </button>
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
      <Pianonotescomponent />

      {mijnArray3.map((tel) => (
        <div>
          <p>{tel}</p>
          <input type="checkbox" value="C1" />
        </div>
      ))}
    </div>
  );
}
