import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";

import * as Tone from "tone";

import speakerlinks from "../../data/speakerlinks.png";

let meter;
let levelDiameter;
let player, loaded, analyser;
let playing = true;

let mic, recorder, soundFile;
let state = 0;

export default function CanvasInit(props) {
  meter = new Tone.Meter();
  Tone.Destination.connect(meter);

  const setup = (p5, canvasParentRef) => {
    const cnv = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);

    cnv.position(0, 0);

    p5.background(0);
    p5.fill(230);
    cnv.style("z-index", -1);
    analyser = new Tone.Analyser("waveform", 128);
    Tone.Destination.connect(analyser);
  };
  function windowResized(p5, canvasParentRef) {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  const draw = (p5) => {
    const dim = Math.min(p5.width, p5.height);
    p5.background(0);
    const diameter = dim * 0.2;
    p5.fill("tomato");

    p5.noFill();
    p5.stroke("purple");

    levelDiameter = p5.map(
      meter.getLevel(),
      -100,
      40,
      diameter,
      diameter * 3,
      true
    );

    p5.circle(p5.width / 2, p5.height, levelDiameter);

    p5.text("HOI HOI HOI HOI HOI", 20, 400 - levelDiameter);

    // p5.background(0, 0, 0, 10);
    p5.strokeWeight(dim * 0.0025);
    p5.stroke(255);
    p5.noFill();

    if (playing) {
      const values = analyser.getValue();

      p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i];
        const x = p5.map(i, 0, values.length - 1, 0, p5.width);
        const y = p5.height + amplitude * p5.height;
        // Place vertex
        p5.vertex(x, y / 2);
      }
      p5.endShape();
    }
  };

  return (
    <div>
      <Sketch setup={setup} windowResized={windowResized} draw={draw} />{" "}
    </div>
  );
}
