import React from "react";
import Sketch from "react-p5";
import * as Tone from "tone";

let ready = false;
let osc;

function canvavas() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef);

    osc = new Tone.Oscillator();
    osc.toDestination();
  };

  const draw = (p5) => {
    p5.background(255, 130, 20);
    p5.ellipse(20, 100, 100);
    p5.ellipse(300, 100, 100);
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default canvavas;
