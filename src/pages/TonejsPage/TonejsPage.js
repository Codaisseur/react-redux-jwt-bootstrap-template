import React, { useEffect, useState } from "react";

import * as Tone from "tone";
import HeroBanner from "../../components/HeroBanner";
import "./style.css";

export default function TonejsPage(props) {
  // console.clear(); //////////////////

  // const sampler1 = new Tone.Sampler({
  //   urls: {
  //     A1: "BD_MT40_Valve3.wav",
  //     C2: "HH_MT40_Valve2.wav",
  //   },
  //   baseUrl: "http://127.0.0.1:5500/src/data/MT40_Drums/",
  // }).connect(volume);

  // const sampler2 = new Tone.Sampler({
  //   urls: {
  //     A1: "HH_MT40_Valve2.wav",
  //     C2: "Perc_MT40_DOA1.wav",
  //   },
  //   baseUrl: "http://127.0.0.1:5500/src/data/MT40_Drums/",
  // }).connect(volume);

  // const seq1 = new Tone.Sequence((time, note) => {
  //   sampler1.triggerAttackRelease(note, 0.1, time);
  // }, mijnArray1).start(0);
  // Tone.Transport.start();

  // const seq2 = new Tone.Sequence((time, note) => {
  //   sampler2.triggerAttackRelease(note, 0.1, time);
  // }, mijnArray2).start(0);
  // Tone.Transport.start();

  // const recorder = new Tone.Recorder();
  // // const synth = new Tone.Synth().connect(recorder);
  // // start recording
  // recorder.start();
  // // generate a few notes

  // // wait for the notes to end and stop the recording
  // setTimeout(async () => {
  //   // the recorded audio is returned as a blob
  //   const recording = await recorder.stop();
  //   // download the recording by creating an anchor element and blob url
  //   const url = URL.createObjectURL(recording);
  //   const anchor = document.createElement("a");
  //   anchor.download = "recording.webm";
  //   anchor.href = url;
  //   anchor.click();
  // }, 4000);

  // const meter = new Tone.Meter();
  // // connect mic to the meter
  // sampler1.connect(meter);
  // // the current level of the mic
  // setInterval(() => console.log(meter.getValue()), 5);

  return (
    <div className="toneJs-page">
      <HeroBanner>
        <h1>TONEJES</h1>
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
    </div>
  );
}
