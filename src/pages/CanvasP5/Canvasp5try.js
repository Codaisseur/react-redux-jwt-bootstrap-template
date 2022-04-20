import React from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";

export default function Canvas5try(p5, canvasParentRef) {
  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(400, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(130);
    p5.fill(10, 202, 153);
    p5.text("hoi", 20, 30);
  };

  // function draw() {
  //   if(mouseIsPressed){
  //     player.start();
  //   } else {
  //     player.stop();
  //   }
  // }

  return (
    <div>
      <div className="sequencerblock-style">
        <Sketch setup={setup} draw={draw} />
      </div>
    </div>
  );
}

// "http://127.0.0.1:5500/src//data/beatje83.wav"
// "http://127.0.0.1:5500/src/data/speaker.tiff"
