import React from "react";
import { useState, useEffect } from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";
import { useSelector } from "react-redux";
import "./style.css";
import * as Tone from "tone";

export default function Canvas5try(p5, canvasParentRef) {
  let sequence1, simpSynth;
  let bgMelody = [
    "C3",
    ["E3", "G3", "D3", "C3"],
    "A3",
    "B2",
    "C2",
    "E3",
    ["A2", "G2"],
    "C4",
  ];

  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(400, 400).parent(canvasParentRef);

    simpSynth = new Tone.Synth({
      oscillator: {
        type: "square",
      },
      envelope: {
        attack: 0.05,
        decay: 0.5,
        sustain: 1,
        release: 5,
      },
    }).toDestination();


    sequence1 = new Tone.Sequence(
      function (time, note) {
        simpSynth.triggerAttackRelease(note, 0.5);
        console.log(note);
      },
      bgMelody,
      "4n"
    );

    //Next we need to set up the clock that will act as the driving force for the sequence of notes.
    Tone.Transport.bpm.value = 80; //how many beats(quarter notes) per minute
    Tone.Transport.start(); //starts the transport
    Tone.Transport.loop = true; //loops the sound
    Tone.Transport.loopStart = 0; //sets parameters for the loop
    Tone.Transport.loopEnd = "2:0:0";

    bgMusic();
  };

  const draw = (p5) => {
    p5.background(130);
    p5.fill(10, 202, 153);

    p5.textAlign("CENTER");
    p5.textFont("futura");
    p5.text(
      "This synthesizer will play a melody automatically",
      p5.width / 2,
      p5.height / 2
    );
  };

  //starts the sequence
  function bgMusic() {
    sequence1.start();
  }

  return (
    <div>
      <div className="sequencerblock-style">
        <Sketch setup={setup} draw={draw} bgMusic={bgMusic} />
      </div>
    </div>
  );
}

// "http://127.0.0.1:5500/src//data/beatje83.wav"
// "http://127.0.0.1:5500/src/data/speaker.tiff"
