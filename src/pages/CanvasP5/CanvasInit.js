import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";

import * as Tone from "tone";

let mic;
let meter;

export default function CanvasInit(props) {
  meter = new Tone.Meter();

  const setup = (p5, canvasParentRef) => {
    const cnv = p5
      .createCanvas(p5.windowWidth / 4, p5.windowHeight / 3)
      .parent(canvasParentRef);
    p5.background(0);
    p5.fill(230);

  };
  function windowResized(p5, canvasParentRef) {
    p5.resizeCanvas(p5.windowWidth / 4, p5.windowHeight / 3);
  }

  const draw = (p5) => {
    const dim = Math.min(p5.width, p5.height);
    p5.background(0);

    const diameter = dim * 0.2;
    p5.fill("tomato");

    p5.noFill();
    p5.stroke("tomato");

    const levelDiameter = p5.map(
      meter.getLevel(),
      -100,
      40,
      diameter,
      diameter * 3,
      true
    );
    p5.circle(p5.width / 2, p5.height / 2, levelDiameter);

    p5.text("HOI HOI HOI HOI HOI", 20, 400 - levelDiameter);
  };

  Tone.Destination.connect(meter);

  return <Sketch setup={setup} windowResized={windowResized} draw={draw} />;
}
