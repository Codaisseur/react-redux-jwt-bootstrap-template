import React from "react";
// import ReactDOM from "react-dom";
import Sketch from "react-p5";
import * as Tone from "tone";

export default function Canvastry(p5) {
  var soundFile;

  var peakCount = 500;

  const setup = (p5, canvasParentRef) => {
    const cnv = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);

    cnv.position(0, 0);

    p5.background(0);
    p5.fill(230);
    cnv.style("z-index", -1);
  };
  function windowResized(p5, canvasParentRef) {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  const draw = (p5) => {
    const dim = Math.min(p5.width, p5.height);
    p5.background(0);

    p5.noFill();
    p5.stroke("purple");

    p5.text("WELKOM OP DE TRY", 20, 400);

    // p5.background(0, 0, 0, 10);
    p5.strokeWeight(dim * 0.0025);
    p5.stroke(255);
    p5.noFill();
  };

  return (
    <div>
      <Sketch setup={setup} windowResized={windowResized} draw={draw} />
    </div>
  );
}
