import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import HeroBanner from "../../components/HeroBanner/index";


export default function CanvasP5() {
  function sketch(p5, canvasParentRef) {


    p5.setup = () => {
      const cnv = p5.createCanvas(600, 400, p5.WEBGL).parent(canvasParentRef);
    };

    p5.draw = () => {
      p5.background(237, 34, 93);
      p5.fill(0);

      if (p5.mouseIsPressed === true) {
        console.log("lozer");
        p5.ellipse(50, 50, 50, 50);
      } else {
        p5.print("oetlul");
        p5.rect(25, 25, 50, 50);
      }
    };
  }

  return (
    <div>
      <HeroBanner>
        <h1>P5 Sketch</h1>
      </HeroBanner>
      <ReactP5Wrapper sketch={sketch} />)
    </div>
  );
}
