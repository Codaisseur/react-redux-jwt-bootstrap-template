import React from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";

export default function Canvas5copy(props) {
  let x = 50;
  let y = 0;
  let direction = "^";
  let mySound;
  let osc, playing, freq, amp, ampl;
  let fft;
  let recorder, soundFile;

  const preload = (p5) => {
    p5.soundFormats("mp3", "ogg");
    mySound = p5.loadSound(
      "https://freesound.org/data/previews/612/612610_5674468-lq"
    );
  };

  function playOscillator() {
    osc.start();
    playing = true;
  }

  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.frameRate(60);

    osc = new p5.constructor.Oscillator("Sine");
    fft = new p5.constructor.FFT();
    ampl = new p5.constructor.Amplitude();
    ampl.setInput(osc);
    recorder = new p5.constructor.SoundRecorder();
    recorder.setInput(osc);
    soundFile = new p5.constructor.SoundFile();

    cnv.mousePressed(() => {
      playOscillator();
      recorder.record(soundFile);
      // mySound.play();
    });
  };

  function mouseReleased() {
    // ramp amplitude to 0 over 0.5 seconds
    osc.amp(0, 0.5);
    playing = false;
    recorder.stop();
  }

  const draw = (p5) => {
    p5.background(0);
    p5.fill(0, 102, 153);
    p5.text(freq, 10, 30);

    freq = p5.movedY * 10;
    amp = p5.constrain(p5.map(p5.mouseX, p5.height, 0, 0, 1), 0, 1);
    let level = ampl.getLevel() * 25;
    p5.text(level, 60, 60);

    let speed = p5.abs(p5.winMouseY - p5.pwinMouseY);

    p5.ellipse(50, 50, 10 + speed * 5, 10 + speed * 5);
    p5.rect(freq / 2 + 250, 400 + speed, 60 + speed * 6, 60);
    if (playing) {
      // smooth the transitions by 0.1 seconds
      osc.freq(freq, 0.1);
      osc.amp(amp, 0.1);
    }
  };

  return (
    <Sketch
      preload={preload}
      playOscillator={playOscillator}
      mouseReleased={mouseReleased}
      setup={setup}
      draw={draw}
    />
  );
}
