import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";

import * as Tone from "tone";

let mic;
let meter;

export default function CanvasInitmeter(props) {
  meter = new Tone.Meter();
  Tone.Destination.connect(meter);

  function setup(p5, canvasParentRef) {
    const cnv = p5
      .createCanvas(p5.windowWidth / 4, p5.windowHeight / 3)
      .parent(canvasParentRef);
    p5.background(0);
    p5.fill(230);
    p5.ellipse(40, 230, 120, 70);
  }
  function windowResized(p5, canvasParentRef) {
    p5.resizeCanvas(p5.windowWidth / 4, p5.windowHeight / 3);
  }

  const draw = (p5) => {
    const dim = Math.min(p5.width, p5.height);
    p5.background(0);

    // Draw a 'play' button
    p5.noStroke();

    if (mic && mic.state === "started") {
      const diameter = dim * 0.2;
      p5.fill("tomato");
      p5.circle(p5.width / 2, p5.height / 2, diameter);

      p5.noFill();
      p5.stroke("tomato");

      const levelDiameter = p5.map(
        meter.getLevel(),
        -100,
        -30,
        diameter,
        diameter * 3,
        true
      );
      p5.circle(p5.width / 2, p5.height / 2, levelDiameter);
    } else {
      p5.fill(255);
    }
    p5.text("HOI HOI HOI HOI HOI", 20, 30);
  };

  mic = new Tone.UserMedia();
  mic.open();
  mic.connect(meter);

  return <Sketch setup={setup} windowResized={windowResized} draw={draw} />;
}
