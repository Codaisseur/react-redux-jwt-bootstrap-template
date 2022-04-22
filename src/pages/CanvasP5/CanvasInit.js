import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";

import * as Tone from "tone";

let mic;
let meter;

export default function CanvasInit(props) {
  meter = new Tone.Meter();

  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.background(0);
    p5.fill(230);
    p5.ellipse(40, 230, 120, 70);
    p5.text("hoiHOIHOIHOIHOIH", 20, 30);
  };

  const draw = (p5) => {
    // For consistent sizing regardless of portrait/landscape
    const dim = Math.min(p5.width, p5.height);

    // Black background
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
  };

  mic = new Tone.UserMedia();
  mic.open();
  mic.connect(meter);

  return <Sketch setup={setup} draw={draw} />;
}
