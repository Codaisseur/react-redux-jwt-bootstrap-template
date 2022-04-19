import React from "react";
import { useState, useEffect } from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";
import * as Tone from "tone";

import "./style.css";

//COMPONENTS
import SeqSelComp from "../../components/SequenseSelector/SeqSelComp";
import SeqSoundComp from "../../components/SeqSoundSelector/SeqSoundComp";
import SeqComp from "../../components/SequencerComponent/SeqComp";

export default function Canvas5try(props) {
  let img;

  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.frameRate(60);
    img = p5.loadImage("http://127.0.0.1:5500/src/data/speaker.png");
    // Load the image
  };

  // "http://127.0.0.1:5500/src//data/beatje83.wav"
  // "http://127.0.0.1:5500/src/data/speaker.tiff"
  const draw = (p5) => {
    p5.background(130);
    p5.fill(10, 202, 153);
    p5.text("hoi", 240, 30);
    p5.image(img, 0, p5.height / 2, img.width / 2, img.height / 2);
  };

  return (
    <div>
      <div className="sequencerblock-style">
        <SeqSoundComp />

        <Sketch
          // preload={preload}
          // playOscillator={playOscillator}
          // mouseReleased={mouseReleased}
          setup={setup}
          draw={draw}
        />

        <SeqSelComp />
      </div>

      {/* <img style={{ borderColor: "red", height: `${amp}px` }} src={speaker} /> */}
    </div>
  );
}
