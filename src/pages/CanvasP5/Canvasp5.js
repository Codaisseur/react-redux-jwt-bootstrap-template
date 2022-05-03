import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";

import "p5/lib/addons/p5.sound";

let x = 50;
let y = 0;

let osc, playing, freq, amp;

export default function CanvasP5(props) {
  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(p5.width, p5.height).parent(canvasParentRef);
    cnv.mousePressed((event) => {
      console.log("Clicked on the canvas. Event:", event);

      cnv.mousePressed("playOscillator");
      
      osc = new p5.Oscillator("sine");
    });
  };

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    freq = p5.constrain(p5.map(p5.mouseX, 0, p5.width, 100, 500), 100, 500);
    amp = p5.constrain(p5.map(p5.mouseY, p5.height, 0, 0, 1), 0, 1);
    if (playing === true) {
      // smooth the transitions by 0.1 seconds
      osc.freq(freq, 0.1);
      osc.amp(amp, 0.1);
    }
  };

  function mouseClicked(_p5, event) {
    console.log(event);
  }

  function playOscillator() {
    // starting an oscillator on a user gesture will enable audio
    // in browsers that have a strict autoplay policy.
    // See also: userStartAudio();
    osc.start();
    playing = true;
  }

  function mouseReleased() {
    // ramp amplitude to 0 over 0.5 seconds
    osc.amp(0, 0.5);
    playing = false;
  }

  return <Sketch setup={setup} draw={draw} />;
}
