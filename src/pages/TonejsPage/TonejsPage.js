import React, { useEffect, useState } from "react";

import * as Tone from "tone";
import HeroBanner from "../../components/HeroBanner";
import "./style.css";

//  import Pianonotescomponent from "../../components/TonejsComponents/Piano notes/Pianonotescomponent";

let ready = false;

export default function TonejsPage(props) {
  // const kickDrum = new Tone.MembraneSynth({
  //   volume: 4,
  // }).toDestination();

  // const player = new Tone.Player(
  //   "https://tonejs.github.io/audio/berklee/gong_1.mp3"
  // ).toDestination();

  // const sampler = new Tone.Sampler({
  //   urls: {
  //     A1: "A1.mp3",
  //     A2: "A2.mp3",
  //   },
  //   baseUrl: "https://tonejs.github.io/audio/casio/",
  // }).toDestination();

  // window.addEventListener(
  //   "keydown",
  //   function (event) {
  //     if (event.defaultPrevented) {
  //       return; // Do nothing if the event was already processed
  //     }
  //     // // switch (event.key) {
  //     // //   case "q":
  //     // //     sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
  //     // //     break;
  //     // //   case "w":
  //     // //     player.start();
  //     // //     break;
  //     // //   case "a":
  //     // //     kickDrum.triggerAttackRelease("C1", "8n");
  //     // //     break;
  //     // //   case "s":
  //     // //     kickDrum.triggerAttackRelease("C2", "32n");
  //     // //     break;
  //     //   default:
  //     //     return; // Quit when this doesn't handle the key event.
  //     }
  //     event.preventDefault();
  //   },
  //   true
  // );

  return (
    <div className="toneJs-page">
      <HeroBanner>
        <h1>Tone.js Page</h1>
      </HeroBanner>
      {/* <button
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
      </button> */}
      <h2>press B to start</h2>
      {/* <Pianonotescomponent a="" b="" /> */}
    </div>
  );
}
