import React from "react";
import { useState, useEffect } from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";

//COMPONENTS
import SeqSelComp from "../../components/SequenseSelector/SeqSelComp";
import SeqSoundComp from "../../components/SeqSoundSelector/SeqSoundComp";
import SeqComp from "../../components/SequencerComponent/SeqComp";

export default function recorder(props) {
  let mySound;
  let movedY, ampl;
  let img;
  let value = 0;
  let mic, recorder, soundFile;
  let state = 0;

  function setup() {
    let cnv = createCanvas(100, 100);
    cnv.mousePressed(canvasPressed);
    background(220);
    textAlign(CENTER, CENTER);

    // create an audio in
    mic = new p5.AudioIn();

    // prompts user to enable their browser mic
    mic.start();

    // create a sound recorder
    recorder = new p5.SoundRecorder();

    // connect the mic to the recorder
    recorder.setInput(mic);

    // this sound file will be used to
    // playback & save the recording
    soundFile = new p5.SoundFile();

    text("tap to record", width / 2, height / 2);
  }

  function canvasPressed() {
    // ensure audio is enabled
    userStartAudio();

    // make sure user enabled the mic
    if (state === 0 && mic.enabled) {
      // record to our p5.SoundFile
      recorder.record(soundFile);

      background(255, 0, 0);
      text("Recording!", width / 2, height / 2);
      state++;
    } else if (state === 1) {
      background(0, 255, 0);

      // stop recorder and
      // send result to soundFile
      recorder.stop();

      text("Done! Tap to play and download", width / 2, height / 2, width - 20);
      state++;
    } else if (state === 2) {
      soundFile.play(); // play the result!
      save(soundFile, "mySound.wav");
      state++;
    }
  }
  return (
    <div>
      <Sketch canvasPressed={canvasPressed} setup={setup} />
    </div>
  );
}
