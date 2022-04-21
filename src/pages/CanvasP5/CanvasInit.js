import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";



export default function CanvasInit(props) {
  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(p5.width, p5.height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(3, 3, 70, 70);
  };

  return <Sketch setup={setup} draw={draw} />;
}
