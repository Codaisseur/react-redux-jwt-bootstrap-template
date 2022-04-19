import React from "react";
import { useState, useEffect } from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";

import "./style.css";

//COMPONENTS
import SeqSelComp from "../../components/SequenseSelector/SeqSelComp";
import SeqSoundComp from "../../components/SeqSoundSelector/SeqSoundComp";
import SeqComp from "../../components/SequencerComponent/SeqComp";

export default function Canvas5copy(props) {
  let mySound;
  let movedY, ampl;
  let img;
  let value = 0;
  let mic, recorder, soundFile;
  let state = 0;

  const preload = (p5) => {
    p5.soundFormats("mp3", "ogg");
    mySound = p5.loadSound(
      "http://127.0.0.1:5500/src/data/MT40_Drums/BD_MT40_Valve3.wav"
    );
    img = p5.loadImage("http://127.0.0.1:5500/src/data/speaker.png");
  };

  function mousePressed() {
    mySound.play();
  }

  function mouseReleased() {
    mySound.stop();
  }

  function keyPressed(p5) {
    if (p5.keyCode === p5.LEFT_ARROW) {
      value = 60;
    } else if (p5.keyCode === p5.RIGHT_ARROW) {
      value = 120;
    } else if (p5.keyCode === p5.UP_ARROW) {
      mySound.play();
    }
    // return false; // prevent any default behaviour
  }

  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.frameRate(60);

    ampl = new p5.constructor.Amplitude();
    ampl.setInput(mySound);

    cnv.mousePressed(canvasPressed);
    p5.background(220);
    p5.textAlign("CENTER", "CENTER");

    recorder = new p5.constructor.SoundRecorder();
    recorder.setInput(mySound);
    soundFile = new p5.constructor.SoundFile();
  };

  const draw = (p5) => {
    p5.background(0);
    p5.fill(0, value, 153);
    p5.text("tap to record", p5.width / 2, p5.height / 2);

    p5.text(movedY, 10, 30);
    movedY = p5.movedY * 10;

    let level = ampl.getLevel() * 25;
    // p5.image(img, 5 + level, 100);

    p5.text(level, 60, 60);

    let mouseSpeed = p5.abs(p5.winMouseY - p5.pwinMouseY);

    p5.ellipse(50, 50, 10 + mouseSpeed * 5, 10 + mouseSpeed * 5);
    p5.rect(movedY / 2 + 250, 400 + mouseSpeed, 60 + mouseSpeed * 6, 60);
    //  line(10, 20, 50, 20); // line(x1, y1, x2, y2)
    p5.rect(10, 300 - level * 20, 200, 10);
    p5.print("hoi");
  };

  function canvasPressed(p5) {
    console.log("canvaspressed");
  }

  return (
    <div>
      <div className="sequencerblock-style">
        <SeqSoundComp />

        <Sketch
          preload={preload}
          mousePressed={mousePressed}
          mouseReleased={mouseReleased}
          keyPressed={keyPressed}
          canvasPressed={canvasPressed}
          setup={setup}
          draw={draw}
        />

        <SeqSelComp />
      </div>

      {/* <img style={{ borderColor: "red", height: `${amp}px` }} src={speaker} /> */}
    </div>
  );
}
